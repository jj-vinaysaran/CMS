const express = require('express');
const app = express();
const mysql = require('mysql2');
const bodyparser = require('body-parser');
const cors = require('cors');


app.use(bodyparser.json());
app.use(cors());

const port = 5000;

app.listen(port,(req,res)=>{
    console.log(`Server is running on port ${port}`);
})
app.get('/' ,(req,res)=>{
    res.send("Hello");
})