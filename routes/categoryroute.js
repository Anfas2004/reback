const app = require('express').Router()
const { request, response } = require('express');
const categorymodel = require('../model/category');


//For Saving category data

app.post('/cnew',(request,response)=>{
    new categorymodel(request.body).save();
    response.send("Record saved Sucessfully")
})

//For retriving category data
app.get('/cview',async(request,response)=>{
    var data = await categorymodel.find();
    response.send(data)
})

//For update status of category (delete)
app.put('/updatestatus/:id',async(request,response)=>{
    let id = request.params.id
    await categorymodel.findByIdAndUpdate(id,{$set:{Status:"INACTIVE"}})
    response.send("Record Deleted")
})

//For modifing the details category
app.put('/cedit/:id',async(request,response)=>{
    let id = request.params.id
    await categorymodel.findByIdAndUpdate(id,request.body)
    response.send("Record updated")
})



module.exports = app