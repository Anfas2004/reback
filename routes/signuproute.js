const app = require('express').Router()
const signupmodel = require("../model/signup")


app.post('/signupnew',(request,response)=>{
    new signupmodel(request.body).save();
    response.send("Record saved Sucessfully")
})

module.exports = app