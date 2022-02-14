const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/mydatabase';
mongoose.connect(mongoDB,{useNewUrlParser:true},{useUnifiedTopology:true})
.then(  ()=>console.log("Connection Successful"))
.catch((err)=>console.log("unsucessfull"));
 