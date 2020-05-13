const mongoose=require('mongoose')
const PostSchema=mongoose.Schema({
   
    symptom:{
           type:String,
           required: true
         }
});

module.exports=mongoose.model('Posts',PostSchema);