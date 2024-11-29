const mongoose =require("mongoose")

let sc=mongoose.Schema;
const uloginschema = new sc({
    username: String,
    password: String,
})

var uloginmodel =mongoose.model("ulogin",uloginschema)
module.exports= uloginmodel;