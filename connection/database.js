const mongoose=require('mongoose')

mongoose.connect("mongodb+srv://anfas22252:anfas2004@retradeog.cea2y.mongodb.net/RetradeDB?retryWrites=true&w=majority&appName=retradeog")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));