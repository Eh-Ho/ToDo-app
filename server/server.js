global.config = require('./api/config');
const express = require('express');
const mongoose = require('mongoose');
const APIRouter = require(`${config.path.routes}`);
const bodyParser = require('body-parser')

const mongooseUri = process.env.MONGO_URI;

mongoose.connect(mongooseUri).then(()=>{
    console.log('connected to mongodb');
}).catch((err)=>{
    console.log(err);
});

const app = express();

// body parser
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.use('/api', APIRouter);


const port = process.env.SERVER_LISTENING_PORT;
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});
