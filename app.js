const express = require('express');
const customer = require('./routes/Customer');
const item = require('./routes/Item');

const app = express();

const port = 4000;

app.use(express.json());
app.use('/customers', customer);
app.use('/items', item);

app.listen(port,()=>{
    console.log(`app starting on ${port}`);
});
