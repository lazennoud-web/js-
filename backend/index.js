const express = require ('express'); 
const app = express(); 
const connectDB =require ("./config/db")

const port = 4000; 
connectDB()

app.get('/',(req,res)=>{
    res.send("hello from beckend")
})
app.listen (port,()=>{
    console.log("seerveur fonctionne")
})