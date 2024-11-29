const mongoose =require("mongoose")

let sc=mongoose.Schema;
const categoryschema = new sc({
    // Cid: String,
    Cname: String,
    Status: String,
})

var categorymodel =mongoose.model("categories",categoryschema)
module.exports= categorymodel;