global.config = require('./api/config');
const express = require('express');



const router = express.Router();

const app = express();

app.use('/', router);

app.listen(config.port,()=>{
    console.log(`server running on port ${config.port}`);
});
