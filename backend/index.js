import express from "express"
import mysql from "mysql2"
import { isBuffer } from "util"
import cors from "cors"
import bodyParser from "body-parser"
import get_CQAS, {Category, Question, Answer, categoryQuestion, questionAnswer} from "./CnQnA.js"

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors());

//
//var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({ extended: false })

//CONNECTING TO SQL
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    //password:"N@vi03kid", //vijay
    password:"Canbe56&8", //bens
    //password:"dataBaseNow12" //pravin
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
    res.send("hello this is the backend")
})


/* 
GET/POST template
app.get("/Person", (req,res)=>{
    const q = "SELECT * FROM Person"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/Person", (req,res)=>{
    const q = "INSERT INTO SimpleCarbonTracker.Person (username,password) VALUES (?);"
    const values = [
        "BenCow",
        "bingbong"
    ];

    db.query(q,[values], (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
*/

//DATABASE INPUT
/* const [category,question,answer,score] = get_CQAS()
Category(db, category)
Question(db, question)
Answer(db, answer)
categoryQuestion(db, category, question, answer)
questionAnswer(db, category, question, answer, score) */

app.post("/post_signup", async (req, res) => {
    var userEmail = req.body.email
    var userUsername = req.body.userName
    var userPassword = req.body.password
    var new_signup = [userUsername, userPassword, userEmail]
    const q = "INSERT INTO SimpleCarbonTracker.Person (username,password,email) VALUES (?);"
    db.query(q,[new_signup], (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
    console.log("New Signup -> EMAIL:",userEmail,"USERNAME:",userUsername,"PASSWORD:",userPassword)
})
//SIGN IN RIGHT AFTER SIGN UP
//put error if username or email is not unique for sign up
//when sign in or sign up success => remove from navbar: create account and sign in => put sign out in navbar

//NEW LAYOUT WHEN SIGNING IN

//optional: sign in "forget password" button

app.get("/check_login", (req,res)=>{
    var checkUsername = req.query.userName
    var checkPassword = req.query.password
    const q = "SELECT * FROM simplecarbontracker.person WHERE username = (?)"
    db.query(q,checkUsername, (err, data)=>{
        if(err) return res.json(err)
        else if ((data == "") || (data[0].password != checkPassword)) res.send("Username or Password is incorrect, Please try again")
        else return res.send("Success!");
    })
})
//GET CURR_Q
app.get("/get_currq", (req , res)=>{
    const q = "SELECT Answer_Text, Question_Text from (simplecarbontracker.Question Inner Join simplecarbontracker.QuestionAnswer on QuestionAnswer.idQuestion = Question.idQuestion) Inner Join simplecarbontracker.Answer on QuestionAnswer.idAnswer = Answer.idAnswer WHERE Question.Question_Num = (?);"
    db.query(q,[req.query.currq],(err,data)=>{
        if(err) return res.json(err)
        res.json(data)
    })
})

app.listen(4000, ()=>{
    console.log("Connected to backend: Port 4000")
})