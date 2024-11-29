const app = require('express').Router()
const { request, response } = require('express');
const loginmodel = require("../model/login")


app.post('/loginview',async(request,response)=>{
  
    const {username,password}=request.body;
    console.log(request.body)

    try{
        const user = await loginmodel.findOne({username,password});

        console.log(user)
        if(user){
            response.json({success:true, message:'login successfully'});
        }
        else{
            response.json({success:false, message:'Invalid username and password'});
        }
    }catch(error){
        response.status(500).json({success:false, message:'error during login'})
    }
});


module.exports = app