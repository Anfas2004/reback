const app = require('express').Router()
const usignupmodel = require("../Umodel/usignup")

//for saving user data
app.post('/usignupnew',(request,response)=>{
    new usignupmodel(request.body).save();
    response.send("Record saved Sucessfully")
})

//for retrieving user data
app.get('/uview',async(request,response)=>{
    var data = await usignupmodel.find();
    response.send(data)
})

//deleting user data
app.put('/updatestatus/:id',async(request,response)=>{
    let id = request.params.id
    await usignupmodel.findByIdAndUpdate(id,{$set:{status:"INACTIVE"}})
    response.send("Record Deleted")
})
module.exports = app