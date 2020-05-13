const express=require('express');
const app=express();
const bp=require('body-parser')
const mongoose=require('mongoose');
app.use(express.json())
app.use(bp.json())
require('dotenv/config')

const postRoute=require('./routes/posts')
const getRoute=require('./routes/get');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bp.urlencoded({ extended: false }));
app.use('/posts',postRoute)
app.use('/get',getRoute)



mongoose.connect(process.env.db_connect,{useNewUrlParser:true,useUnifiedTopology: true},()=>{
    console.log('db connected')
});
    
      
const PORT=4000;
app.listen(PORT,'127.0.0.1',()=>{
    console.log(`server started at ${PORT}`)
})