const app = require('express').Router()
const multer = require('multer');
const productmodel = require("../model/product")
const categorymodel = require("../model/category")

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
app.put('/pedit/:id', upload.single('Pphoto'), async (request, response) => {
    try {
        const id = request.params.id;
        const { Pname, Pdescr, Price, Cname, Status } = request.body
        let result = null;
        if (request.file) {
            console.log("hi")
            const updatedData = {
                Pname,
                Pdescr,
                Price,
                Cname,
                Status,
                Pphoto: {
                    data: request.file.buffer,
                    contentType: request.file.mimetype,
                }

            };
            console.log(updatedData)
            result = await productmodel.findByIdAndUpdate(id,updatedData);

        }
        else {
            const updatedData = {
                Pname,
                Pdescr,
                Price,
                Cname,
                Status,
            }
            result = await productmodel.findByIdAndUpdate(id, updatedData);

        }
        if (!result) {
            return response.status(404).json({ message: 'Item not found' });
        }
        response.status(200).json({ message: 'Item updates successfully', data: result });


    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
});




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


//For retriving category data
app.get('/caview',async(request,response)=>{
    var data = await categorymodel.find({Status:'ACTIVE'});
    response.send(data)
})


app.get('/pdetails/:id', async (request, response) => {   
    try {
        const id = request.params.id;
    
        // Using findById for better performance and clarity
        const result = await productmodel.findById(id);

        if (!result) {
            return response.status(404).json({ message: 'Product not found' });
        }

        response.json(result);
    } catch (error) {
        response.status(500).json({ message: 'Server error', error: error.message });
    }
});
module.exports = app