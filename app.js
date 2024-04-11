const express = require('express')
const userRoute=require('./routes/userRoute');
const orderRoutes=require('./orders/orderRoutes');
var bodyParser=require('body-parser');
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api/user',userRoute);
app.use('/api/orders',orderRoutes);
app.get('/', (req, res) => res.send('Server is working fine'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))