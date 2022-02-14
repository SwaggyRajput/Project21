const express=require('express')
const app=express();
const port=process.env.PORT ||7000
require('./db/conn')
const myregister=require('./models/myregister')
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({extended:false}))
var cors = require('cors');
app.use(bodyParser.urlencoded({     
    extended: false
  }));

app.use(cors());
app.post('/',async(req,res)=>{
    try{
        const {name,clas,branch}=req.body;
        const student=new myregister({
            name,clas,branch
        })
        const registerStudent=await student.save()
    }catch(error){
        res.status(400).send(error);
    }
})















app.listen(port,()=>console.log(`Server is running at port ${port}`))