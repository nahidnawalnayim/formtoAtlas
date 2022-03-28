const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const mongoose = require("./database");

app.set("view engine", "pug")
app.set("views", "views")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(session({
    secret: "bbq chips",
    resave: true,
    saveUninitialized: false
}))


app.get('/',(req,res)=>{
    res.render('home',{title: 'Main Page', message: 'Hello World'});
})

// app.get('/login',(req,res)=>{
//     res.render('login',{title: 'login Page', message: 'Hello stranger'});
// })

// app.post('/login',(req,res)=>{
//     res.render('login',{title: 'login Page', message: 'Hello stranger'});
// })

//router
const loginRoute=require('./api/registerroute')

app.use("/login",loginRoute)
app.listen(3005,()=>{
    console.log('Server is running on port 3005');
})