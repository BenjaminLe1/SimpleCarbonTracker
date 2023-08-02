import express from "express"
import mysql from "mysql2"
import { isBuffer } from "util"
import cors from "cors"
import session from "express-session"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import bcrypt from "bcrypt"
import get_CQAS, {Category, Question, Answer, categoryQuestion, questionAnswer} from "./CnQnA.js"

const saltRounds = 10


//API setup
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET","POST"],
    credentials: true
}));
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({
    key:"userid",
    secret:"BenCow is god",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24 * 30,
    },
}))

//CONNECTING TO SQL database
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    //password:"N@vi03kid", //vijay
    password:"Canbe56&8", //bens
    //password:"dataBaseNow12", //pravin
    database:"simplecarbontracker"
})

db.connect(function(err) {                 // The server is either down
    if(err) {                                   // or restarting (takes a while sometimes).
        console.log('error when connecting to db:', err.code);
        setTimeout(handleDisconnect, 2000);     // We introduce a delay before attempting to reconnect,
    }else{
        console.log('Connected to db: SQL');
    }                                           // to avoid a hot loop, and to allow our node script to
});                                             // process asynchronous requests in the meantime.
                                                // If you're also serving http, display a 503 error.
db.on('error', function(err) {
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
        handleDisconnect();                       // lost due to either server restart, or a
    }else{
        throw err;
    }
});

function handleDisconnect() {
	console.log('handleDisconnect()');
	db.destroy();
}


app.get("/", cors(), (req,res)=>{
    console.log(req.session.cookie)
    res.send("hello this is the backend")
})


//DATABASE INPUT
/*
const [category,question,answer,score] = get_CQAS()
Category(db, category)
Question(db, question)
Answer(db, answer)
categoryQuestion(db, category, question, answer)
questionAnswer(db, category, question, answer, score) 
*/

//API CALLS

//Post a new signup
app.post("/post_signup", async (req, res) => {
    var userEmail = req.body.email
    var userUsername = req.body.userName
    var userPassword = req.body.password
    bcrypt.hash(userPassword, saltRounds, (err, hash) =>{
        var new_signup = [userUsername, hash, userEmail]
        const q = "INSERT INTO SimpleCarbonTracker.Person (username,password,email) VALUES (?);"
        db.query(q,[new_signup], (err, data)=>{
            if(err) return res.json(err)
        })
        console.log("New Signup -> EMAIL:",userEmail,"USERNAME:",userUsername,"PASSWORD(hashed):",hash)
    })
})

//SIGN IN RIGHT AFTER SIGN UP
//put error if username or email is not unique for sign up
//when sign in or sign up success => remove from navbar: create account and sign in => put sign out in navbar

//Check if account is unique (create an account)
app.get("/check_accounts", (req,res)=>{
    var checkEmail = req.query.email
    var checkUsername = req.query.userName
    var checkPassword = req.query.password
    if (checkUsername == "" || checkEmail == "") return res.send("Email/Username field is empty.")
    if (checkPassword == "") return res.send("Password field is empty.")
    const q = "SELECT * FROM simplecarbontracker.person WHERE email = (?)"
    db.query(q,checkEmail, (err, data)=>{
        if(err) return res.json(err)
        else if (data != ""){
            return res.send("Email is Taken.")
        }
        const g = "SELECT * FROM simplecarbontracker.person WHERE username = (?)"
        db.query(g,checkUsername, (err, data)=>{
            if(err) return res.json(err)
            else if (data != ""){
                return res.send("Username is Taken.")
            }
            else{
                return res.send("Account Created Successfully!")
            }
        })
    })
})

//optional: sign in "forget password" button

//Check if login valid
app.post("/check_login", (req,res)=>{
    const checkUsername = req.body.userName
    const checkPassword = req.body.password
    const q = "SELECT * FROM simplecarbontracker.person WHERE username = (?)"
    db.query(q,checkUsername, (err, data)=>{
        if(err) return res.json(err)
        if (data.length > 0){
            bcrypt.compare(checkPassword, data[0].password, (err, response) =>{
                if(response){
                    req.session.user = data;
                    console.log("New Sign In:", req.session.user[0].username)
                    res.send({
                        msg: "Success!",
                        info: data
                    })
                }
                else{
                    res.send({msg: "Username or Password is incorrect, Please try again.", info:""})
                }
            })
        }
        else res.send({msg: "User does not exist!", info:""});
    })
})

app.get("/check_login", (req,res)=>{
    if(req.session.user){
        res.send({loggedIn: true, user: req.session.user})
    }else{
        res.send({loggedIn: false})
    }
})

app.post("/signout", (req,res)=>{
    //console.log(req.session.cookie)
    delete req.session.user
    console.log("Signed Out")
})

//Get current question
app.get("/get_currq", (req , res)=>{
    const q = "SELECT Answer_Text, Question_Text from (simplecarbontracker.Question Inner Join simplecarbontracker.QuestionAnswer on QuestionAnswer.idQuestion = Question.idQuestion) Inner Join simplecarbontracker.Answer on QuestionAnswer.idAnswer = Answer.idAnswer WHERE Question.Question_Num = (?);"
    db.query(q,[req.query.currq],(err,data)=>{
        if(err) return res.json(err)
        res.json(data)
    })
})

app.post("/delete_prev", async (req, res) => {
    var u = req.body.username
    //In person score table
    //NEED ID QUESTION (for duplicates)
    //OR person_score data after signout
    //NEED ID CATEGORY (for results page)
    const q = "DELETE FROM SimpleCarbonTracker.PersonScore WHERE idPerson = (SELECT idPerson from SimpleCarbonTracker.Person WHERE username = (?));"
    db.query(q,[u], (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

//Post scores to Person
app.post("/post_QAS", async (req, res) => {
    var qu = req.body.question
    var a = req.body.answer
    var u = req.body.username
    //In person score table
    //NEED ID QUESTION (for duplicates)
    //OR person_score data after signout
    //NEED ID CATEGORY (for results page)
    const q = "INSERT INTO SimpleCarbonTracker.PersonScore (idPerson, Score, idCategory) VALUES ((SELECT idPerson FROM SimpleCarbonTracker.Person WHERE username = (?)),(Select Score FROM SimpleCarbonTracker.QuestionAnswer WHERE idQuestion = (SELECT idQuestion FROM SimpleCarbonTracker.Question WHERE Question_Text = (?)) and idAnswer = (SELECT idAnswer FROM SimpleCarbonTracker.Answer WHERE Answer_Text = (?))),(SELECT idCategory FROM SimpleCarbonTracker.CategoryQuestion WHERE idQuestion = (SELECT idQuestion FROM SimpleCarbonTracker.Question WHERE Question_Text = (?))));"
    db.query(q,[u,qu,a,qu], (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

//Get scores for results page
app.get("/get_scores", (req , res)=>{
    var u = req.query.username
    var c = req.query.cat
    //console.log(u,c)
    const q = "SELECT Score from simplecarbontracker.PersonScore WHERE idPerson = (SELECT idPerson FROM SimpleCarbonTracker.Person WHERE username = (?)) and idCategory = (SELECT idCategory FROM SimpleCarbonTracker.Category WHERE Category_Name = (?));"
    db.query(q,[u,c],(err,data)=>{
        if(err) return res.json(err)
        res.json(data[0].Score + data[1].Score + data[2].Score)
    })
})


app.listen(4000, ()=>{
    console.log("Connected to backend: Port 4000")
})