const mongoose=require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name:{type:String,required:true},
  description:{type:String, required:true},
  price:{type:String,required:true},
  image:{type:String,require:true}
});

const proSchema=mongoose.model('Products',productSchema);
module.exports=proSchema;