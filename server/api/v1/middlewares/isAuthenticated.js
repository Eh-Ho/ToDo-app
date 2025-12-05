const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const { StatusCodes, ReasonPhrases } = require('http-status-codes');


module.exports = async(req, res, next) => {
    try{
        const token = req.headers('authorization');

        if(!token){
            // throw error
        }

        let decoded;
        try{
            decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        }catch(err){
            // error 401
        }
        const user = User.findById(decoded.id);
        if(!user){
            // error 401
        }
        req.user = {...user, id: user._id.toString()};                          
        next();
    }catch(error){
        //trow error
    }
};