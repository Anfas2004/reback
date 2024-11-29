const mongoose =require("mongoose")

let sc=mongoose.Schema;
const productschema = new sc({ 
    Pname: String,
    Pdescr: String,
    Price: Number,
    Cname: String,
    Status: String,
    Pphoto:{
        data:Buffer,
        contentType:String,
    },
    
})

var productmodel =mongoose.model("products",productschema)
module.exports= productmodel;