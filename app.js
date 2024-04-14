const express = require('express')
const cors=require('cors');
const userRoute=require('./routes/userRoute');
const orderRoutes=require('./orders/orderRoutes');
const mongoConnect=require('./connections/mongoConnect');
const app = express()
const port = 3030;
app.use(cors())

mongoConnect();

app.use('/api/user',userRoute);
app.use('/api/orders',orderRoutes);
app.get('/', (req, res) => res.send('Server is working fine'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))