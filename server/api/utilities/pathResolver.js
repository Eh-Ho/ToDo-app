const path = require('path');

module.exports = (apiVersion) => {
    return{
        controllers : path.resolve(`./api/${apiVersion}/controllers`),
        routes : path.resolve(`./api/${apiVersion}/routes`),
        middlewares : path.resolve(`./api/${apiVersion}/middlewares`),
        services : path.resolve(`./api/${apiVersion}/services`),
        models : path.resolve(`./api/${apiVersion}/models`),
    };
};