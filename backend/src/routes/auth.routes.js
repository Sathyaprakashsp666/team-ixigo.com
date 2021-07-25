const express = require('express');
const {body}=require("express-validator")
const router = express.Router();
const User=require("../models/user.model")
const authController=require("../controller/auth.controller")

router.put('/signup',[
    body("email").isEmail().withMessage("please type a valid Email").custom((val, {req})=>{
       return User.findOne({email:val}).then(res=>{
            if(res){
                Promise.reject("Account with this Email already Exists")
            }
        })
    }).normalizeEmail(),

    body("password").trim().isLength({min:8}),
    body("name").trim().isLength({min:5})
],authController.signup);

router.post("/login", authController.login)







module.exports = router;
