const mongoose=require('mongoose')
const mySchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    clas:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    }
})

const myregister=mongoose.model('myregister',mySchema);
module.exports=myregister;