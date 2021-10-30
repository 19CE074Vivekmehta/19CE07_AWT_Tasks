const express=require('express');
const path=require('path');
const ejs=require('ejs');
const mysql=require('mysql');
const { appendFile } = require('fs');
const app=express();

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Vivek@3011',
    database:'crudmysql'
});
connection.connect(function(error){
    if(!!error) console.log(error);
    else console.log('Database Connected!');
}); 

//set views file
app.set('views',path.join(__dirname,'views'));
			
//set view engine
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',(req, res) => {
    // res.send('CRUD Operation using NodeJS / ExpressJS / MySQL');
    let sql = "SELECT * FROM users";
    let query = connection.query(sql, (err, rows) => {
        if(err) throw err;
        res.render('user_index', {
            title : 'CRUD Operation using NodeJS / ExpressJS / MySQL',
            users : rows
        });
    });
});




//server listning 
app.listen(3030,()=>{
    console.log('Server is running on port 3000...')
})
