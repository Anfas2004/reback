const express=require("express")
const cors=require("cors")

const Database = require("./connection/database");
const Loginrouter = require('./routes/loginroute');
const Categoryrouter = require('./routes/categoryroute');
const productrouter = require('./routes/productroute');
const signuprouter = require('./routes/signuproute');
const uloginrouter= require('./Uroutes/uloginroute');
const usignuprouter= require('./Uroutes/usignuproute');

const app = new express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());


//api creation
app.get('/',(request,response)=>{
    response.send("hai")
})

app.use('/login',Loginrouter)
app.use('/category',Categoryrouter)
app.use('/product',productrouter)
app.use('/signup',signuprouter)
app.use('/ulogin',uloginrouter)
app.use('/usignup',usignuprouter)

app.listen(5005,(request,response)=>{
    console.log("server is running on port 5005");
});