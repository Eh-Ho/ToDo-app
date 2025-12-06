const{StatusCodes, ReasonPhrases} = require('http-status-codes');
const AppError = require('../../../utils/AppError');


module.exports = (req, res, next) => {
    allowedRoles = ['admin'];

    if (!req.user) {
        return next(new AppError(ReasonPhrases.UNAUTHORIZED, StatusCodes.UNAUTHORIZED))
    }

    if(!allowedRoles.includes(req.user.role)){
        return next(new AppError(ReasonPhrases.FORBIDDEN, StatusCodes.FORBIDDEN))
    }

    next();
};