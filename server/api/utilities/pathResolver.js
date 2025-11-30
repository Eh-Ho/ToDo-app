const path = require('path');

module.exports = (apiVersion) => {
    return{
        controllers : path.resolve(`./api/${apiVersion}/controllers`),
        routes : path.resolve(`./api/${apiVersion}/routes`),
    };
};