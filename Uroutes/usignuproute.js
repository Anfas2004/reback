const app = require('express').Router()
const usignupmodel = require("../Umodel/usignup")


app.post('/usignupnew',(request,response)=>{
    new usignupmodel(request.body).save();
    response.send("Record saved Sucessfully")
})

module.exports = app