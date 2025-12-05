const{StatusCodes, ReasonPhrases} = require('http-status-codes');


module.exports = (req, res, next) => {
    allowedRoles = ['admin'];

    if (!req.user) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Authentication required' });
    }

    if(!allowedRoles.includes(req.user.role)){
        return res.status(StatusCodes.FORBIDDEN).json({message : ReasonPhrases.FORBIDDEN});
    }

    next();
};