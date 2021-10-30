const express=require("express");
const app=express();
const router=require('./route');
const path=require('path');

app.use(express.urlencoded({extended:true}))
app.use("/templates",express.static(path.join(__dirname,'templates')));
app.use('/',router);

app.listen(3000,()=>{
    console.log("Server listning on port 3000");
})