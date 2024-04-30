const express = require("express");
const note=require("./data/note")
const dotenv= require("dotenv")

const app = express();
dotenv.config()

app.get("/",(req,res)=>{
    res.send("...api is running fine")
})
app.get("/api",(req,res)=>{
    res.json(note)
})
app.get("/api/:id",(req,res)=>{
    const name=note.find((n)=>n._id === req.params.id)
    console.log(name)
    res.send(name)
})
const Port= process.env.PORT || 5011
app.listen(Port, console.log(`port ${Port} or 5011`));
