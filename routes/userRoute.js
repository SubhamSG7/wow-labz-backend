const express=require('express');
const bodyParser=require('body-parser');
const router=express.Router();

router.use(bodyParser.json());

//Handling User Registration
router.post('/SignIn',(req,res)=>{
    console.log(req.body);
    res.sendStatus(200);
})
// Handling User Login
router.post('/LogIn',(req,res)=>{
    console.log(req.body);
    res.sendStatus(200);
})



module.exports=router;