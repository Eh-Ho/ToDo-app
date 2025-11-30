global.config = require('./api/config');
const express = require('express');

const APIRouter = require(`${config.path.routes}`);



const app = express();

app.use('/api', APIRouter);

app.listen(config.port,()=>{
    console.log(`server running on port ${config.port}`);
});
