const app = require('express').Router()
const { request, response } = require('express');
const usignupmodel = require("../Umodel/usignup")


app.post('/uloginview',async(request,response)=>{
  
    const {username,password}=request.body;
    console.log(request.body)

    try{
        const user = await usignupmodel.findOne({username,password,status:'ACTIVE'});

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