const app = require('express').Router()
const multer = require('multer');
const productmodel = require("../model/product")

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

//for saving
app.post('/pnew', upload.single('Pphoto'), async (request, response) => {
    // console.log(request.body)
    try {
        const { Pname, Pdescr, Price, Cname, Status } = request.body
        const newdata = new productmodel({
            Pname,
            Pdescr,
            Price,
            Cname,
            Status,
            Pphoto: {
                data: request.file.buffer,
                contentType: request.file.mimetype,
            }
        })
        await newdata.save();
        res.status(200).json({ message: 'product added successfully' });
    }
    catch (error) {
        response.status(500).json({ error: 'Internal Server Error' });
    }
}
)

app.get('/pview',async(request,response)=>{
    var data = await productmodel.find();
    response.send(data)
})

app.put('/updatestatus/:id',async(request,response)=>{
    let id = request.params.id
    await productmodel.findByIdAndUpdate(id,{$set:{Status:"INACTIVE"}})
    response.send("Record Deleted")
})

//For modifing the details category
app.put('/pedit/:id',async(request,response)=>{
    let id = request.params.id
    await productmodel.findByIdAndUpdate(id,request.body)
    response.send("Record updated")
})


module.exports = app