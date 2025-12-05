const AuthService = require('../../services/AuthService');
const {StatusCodes, ReasonPhrases} = require('http-status-codes');
const {loginDTO, signUpDTO} = require('../../DTOs/authDTO');

module.exports = new class AuthController {
    login =  async(req, res, next) => {
        try{
            const loginBody = loginDTO(req.body);
            const message = ReasonPhrases.OK;
            const data = await AuthService.login(loginBody);
            res.cookie('jwt', data.newRefreshToken, { 
                httpOnly: true, 
                secure: true, 
                sameSite: 'None', 
                maxAge: 24 * 60 * 60 * 1000 
            });
            res.status(StatusCodes.OK).json({message , data : {token : data.newAccessToken, user : data.user}});  
        }catch(error){
            next(error);
        };  
    };

    logout = async(req, res, next) => {
        try{
            const cookies = req.cookies;
            if (!cookies?.jwt) return res.sendStatus(204); 
    
            const message = ReasonPhrases.OK;
            await AuthService.logout(cookies.jwt);
            res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
            // res.sendStatus(204);
            res.status(StatusCodes.OK).json({message});

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

    refresh = async(req, res, next)=>{
        try{
            const cookies = req.cookies;
            // if (!cookies?.jwt) error 401
            const data = await AuthService.refresh(cookies.jwt);
            res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
            res.cookie('jwt', data.newRefreshToken, { 
                httpOnly: true, 
                secure: true, 
                sameSite: 'None', 
                maxAge: 24 * 60 * 60 * 1000 
            });
            res.status(StatusCodes.OK).json({message : ReasonPhrases.OK, data: data.newAccessToken});
        }catch(error){
            next(error);
        };
    };

};