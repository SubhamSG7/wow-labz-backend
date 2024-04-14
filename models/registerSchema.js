const mongoose=require('mongoose');

const Schema = mongoose.Schema;

const registerSchema = new Schema({
  name:{type:String,required:true},
  address:{type:String, required:true},
  email:{type:String,unique:true},
  password:{type:String,required:true},
  phoneNumber:{type:String,require:true}
});

const regSchema=mongoose.model('RegisteredUsers',registerSchema);
module.exports=regSchema;