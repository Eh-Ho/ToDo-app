const AuthService = require('../../services/AuthService');
const {StatusCodes, ReasonPhrases} = require('http-status-codes');
const {loginDTO, signUpDTO} = require('../../DTOs/authDTO');

module.exports = new class AuthController {
    login =  async(req, res, next) => {
        try{
            const loginBody = loginDTO(req.body);
            const message = ReasonPhrases.OK;
            const data = await AuthService.login(loginBody);
            res.status(StatusCodes.OK).json({message , data});  
        }catch(error){
            next(error);
        };  
    };

    logout = (req, res, next) => {
        try{
            const message = ReasonPhrases.OK;
            const data = AuthService.logout(req.user);
            res.status(StatusCodes.OK).json({message, data});    
        }catch(error){
            next(error);
        };
    };

    signUp = async (req, res, next) => {
        try{
            const signUpBody = signUpDTO(req.body);
            const message = ReasonPhrases.CREATED;
            const data = await AuthService.signup(signUpBody);
            res.status(StatusCodes.CREATED).json({message, data});
        }catch(error){
            next(error);
        };
    };

};