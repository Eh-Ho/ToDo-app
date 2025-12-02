const Service = require("./Service");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = new class AuthService extends Service{

    login = async(loginBody) => {
        try{
            const {loginEmail, loginPassword} = loginBody;
            const user = await this.model.User.findOne({email : loginEmail});
            // if(!user) return 
            const isMatch = await user.comparePassword(loginPassword);
            // if(!isMatch) return
            const token = jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET, { expiresIn: process.env.TOKEN_EXP });
            const {password, ...userInfo} = user;
            return {token, userInfo};
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
            const {password, ...userInfo} = newUser;
            return {token, userInfo};
        }catch(error){
            throw error;
        };
    };

};