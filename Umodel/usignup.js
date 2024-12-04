const mongoose =require("mongoose")

let sc=mongoose.Schema;
const usignupschema = new sc({
    username: String,
    email: String,
    dob: String,
    aadhar: String,
    password: String,
    confirmPassword: String,
    status: String,
})

var usignupmodel =mongoose.model("usignup",usignupschema)
module.exports= usignupmodel;