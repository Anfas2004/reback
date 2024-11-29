const mongoose =require("mongoose")

let sc=mongoose.Schema;
const loginschema = new sc({
    username: String,
    password: String,
})

var loginmodel =mongoose.model("login",loginschema)
module.exports= loginmodel;