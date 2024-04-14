const mongoose=require('mongoose');

const Schema = mongoose.Schema;

const placeOrderSchema = new Schema({
  email:{type:String,required:true},
  address:{type:String, required:true},
  _id:{type:String,required:true}
});

const placedOrders=mongoose.model('PlacedOrders',placeOrderSchema);
module.exports=placedOrders;