const mongoose=require('mongoose');


async function connect(){
    await mongoose.connect('mongodb+srv://dsubham257sd:9832777363@cluster0.mrprevt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('connected to DB');
}
module.exports=connect;