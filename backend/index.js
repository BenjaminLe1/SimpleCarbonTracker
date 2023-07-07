import express from "express"
import mysql from "mysql"
import { isBuffer } from "util"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Canbe56&8",
    database:"SimpleCarbonTracker"
})

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