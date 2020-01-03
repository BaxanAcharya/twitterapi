"use strict";
const test = require('express');
var bodyParser = require('body-parser');
var multer=require('multer');
var upload = multer({ dest: 'public/Images/' })


var userController = require('./controllers/User_Controller.js')
var ImageController=require('./controllers/ImageController')
var AuthController = require('./controllers/AuthController.js')
var PostController=require('./controllers/PostController.js');

var app1 = test()
app1.use(bodyParser.urlencoded({extended:true}))



app1.post('/profile', upload.single	('avatar'), ImageController.insertImage)

app1.post('/login',AuthController.validtor,AuthController.passwordCheck, AuthController.jwtTokenGen)

app1.post('/registration',userController.validation,userController.hashGen,userController.registerUser )

app1.get('/posts', AuthController.verifyToken,PostController.selectAll);



// error handlig 1st param err
app1.use(function(err,req,res,next){

    console.log(err.message);
    res.json({
      status:500,
      message:err.message
    })
    res.send(err.message)
    })

app1.listen(3001);