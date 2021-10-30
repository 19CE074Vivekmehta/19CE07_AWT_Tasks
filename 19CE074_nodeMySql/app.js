const express=require("express");
const mysql=require("mysql");

//Create connection
const db=mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'Vivek@3011',
    database: 'nodemysql'
    
});

//connect 
db.connect((err)=>{
    if(err){
        console.log(err);
    }
    console.log('Mysql connected');
});

const app=express();

//Create DB
app.get('/createdb',(req,res)=>{
    let sql='Create DATABASE nodemysql';
    db.query(sql,(err,result)=>{
        if(err) console.log(err);
        console.log(result);
        res.send("database created");
    })
});

//Create Table
app.get('/createposttable',(req,res)=>{
    const sql=`CREATE TABLE IF NOT EXISTS facultyInfo(
        studentID varchar(10) NOT NULL,
        fname varchar(50) NOT NULL,
        lname varchar(50) NOT NULL,
        mobileNo varchar(15) NOT NULL,
        PRIMARY KEY (studentID))`;
        db.query(sql,(err,result)=>{
            if(err) throw err;
            console.log(result);
            res.send('Post table created');
        })
});

//Insert post 1
app.get('/addpost1',(req,res)=>{
    let post={title:"post one",body:'this is post number one'};
    let sql='INSERT INTO posts SET ?';
    let query=db.query(sql,post,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added');
    })
})

app.listen("3000",()=>{
    console.log("Server listning to port 3000...")
});