const express=require('express');


const router=express.Router();

router.get('/homePage',(req,res)=>{
    res.send('Welcome to HomePage')
})

module.exports=router;