const Service = require("./Service");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = new class AuthService extends Service{

    login = async(loginBody) => {
        try{
            const user = await this.model.User.findOne({email : loginBody.email});
            // if(!user) return 
            const isMatch = await user.comparePassword(loginBody.password);
            // if(!isMatch) return
            const token = jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET, { expiresIn: process.env.TOKEN_EXP });
            return {token, user};
        }catch(error){
            throw error;
        };
    };

    logout = async() => {
        return true;
    };

    signup = async(signUpBody) => {
        try{
            const existingUser = this.model.User.findOne({email : signUpBody.email});
            // if(existingUser) return 
            const newUser = new this.model.User(signUpBody);
            await newUser.save();
            return newUser;
        }catch(error){
            throw error;
        };
    };

};