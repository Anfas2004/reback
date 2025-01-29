const app = require('express').Router()
const usignupmodel = require("../Umodel/usignup")

//for saving user data
app.post('/usignupnew',(request,response)=>{
    new usignupmodel(request.body).save();
    response.send("Record saved Sucessfully")
})

app.get('/profile/:id', async (request, response) => {
    try {
        const userId = request.params.id; // Get the user ID from the route parameter
        const user = await usignupmodel.findById(userId); // Fetch user by ID from the database

        response.status(200).send(user); // Send the user details as the response
    } catch (error) {
        console.error(error); // Log any errors
        response.status(500).send({ message: 'An error occurred' }); // Send a server error response
    }
});



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

//undeleting user data
app.put('/undeletestatus/:id',async(request,response)=>{
    let id = request.params.id
    await usignupmodel.findByIdAndUpdate(id,{$set:{status:"ACTIVE"}})
    response.send("Record Undeleted")
})
module.exports = app