global.config = require('./api/config');
const express = require('express');
const mongoose = require('mongoose');
const APIRouter = require(`${config.path.routes}`);

const mongooseUri = process.env.MONGO_URI;

mongoose.connect(mongooseUri).then(()=>{
    console.log('connected to mongodb');
}).catch((err)=>{
    console.log(err);
});

const app = express();

app.use('/api', APIRouter);

console.log(process.env);

const port = process.env.SERVER_LISTENING_PORT;
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});
