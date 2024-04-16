const express=require('express');
const products=require('../models/productSchema');
const users=require('../models/registerSchema');
const placedOrder=require('../models/placedorderSchema')
const bodyParser=require('body-parser');

const router=express.Router();
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());
router.get('/homePage',(req,res)=>{
    res.send('Welcome to HomePage')
})
router.get('/Products',async(req,res)=>{
    try {
        const allProducts=await products.find();
        res.send(allProducts).status(200);
    } catch (error) {
        
    }
})
router.post('/fecthuser',async(req,res)=>{
    const {email}=req.body;
    try {
        const userData=await users.find({email:email})
        res.send({address:userData[0].address}).status(200);
    } catch (error) {

        res.send({message:'failed'}).status(403)
    }
})
router.post('/AddProducts',async(req,res)=>{
    try {
        const newProduct=await products.create(req.body);
        res.json({message:'success'}).status(201)
    } catch (error) {
        res.json({message:'failed'}).status(403)
    }
})
router.post('/placeOrder',async(req,res)=>{
    const id=req.body.product._id;
    const {address,email}=req.body;
    try {
        const placed=await placedOrder.create({_id:id,email:email,address:address})
        res.json({message:'success'}).status(201)
    } catch (error) {
        res.json({error}).status(403)
    }
})
router.get('/myOrders',async(req,res)=>{
    const {email}=req.headers;
    try {
        const ordersmail = await placedOrder.find({ email: email });
        const productsData = [];
        for (let i = 0; i < ordersmail.length; i++) {
            const myordersData = await products.find({ _id: ordersmail[i]._id });
            productsData.push(...myordersData);
        }
        res.status(200).json({ products: productsData });
    } catch (error) {
        res.status(404).json({ message: 'failed', error });
    }
    
})
module.exports=router;