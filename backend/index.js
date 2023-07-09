import express from "express"
import mysql from "mysql2"
import { isBuffer } from "util"
import cors from "cors"

const app = express()

app.use(cors({
    origin: 'http://localhost:3001'
}));

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    //password:"N@vi03kid", //vijay
<<<<<<< HEAD
    //password:"Canbe56&8", //bens
    password:"dataBaseNow12", //pravin
=======
    password:"Canbe56&8", //bens
    //password:"dataBaseNow12" //pravin
>>>>>>> 0cdee1aec6bee091071f24c3b5b7f0369487f1e5
    database:"simplecarbontracker"
})

db.connect(function(err) {                 // The server is either down
    if(err) {                                   // or restarting (takes a while sometimes).
        console.log('error when connecting to db:', err.code);
        setTimeout(handleDisconnect, 2000);     // We introduce a delay before attempting to reconnect,
    }else{
        console.log('Connected to db!');
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

app.get("/", (req,res)=>{
    res.json("hello this is the backend")
})

//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Canbe56&8';

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

app.listen(3000, ()=>{
    console.log("Connected to backend")
})