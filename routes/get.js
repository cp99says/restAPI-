const express=require('express');
const app=express.Router();

app.get('/get',(req,res)=>{
    res.send('get')
})
app.get('/ip',(req,res)=>{
      res.render('index.ejs')
})


module.exports=app;
console.log('get is up')