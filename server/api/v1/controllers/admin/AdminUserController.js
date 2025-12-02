const UserService = require('../../services/UserService');
const {StatusCodes, ReasonPhrases} = require('http-status-codes');

module.exports = new class AdminUserController  {
    getAllUsers = async (req, res) => {
        res.status(StatusCodes.OK)
            .json({message : ReasonPhrases.OK,
            data : await UserService.getAllUsers()
        });
    };

    getUser = async (req, res) => {
        res.status(StatusCodes.OK)
            .json({message : ReasonPhrases.OK,
            data : await UserService.getUser(req.params.userId)
        });
    };

    createUser = async (req, res) => {
        // TODO: dto implementation
        const userBody = req.body;
        res.status(StatusCodes.OK)
            .json({message : ReasonPhrases.OK,
            data : await UserService.createUser(userBody)
        });
    };

    updateUser = async (req, res) => {
        // TODO: dto implementation
        const userBody = req.body;
        
        res.status(StatusCodes.OK)
            .json({message : ReasonPhrases.OK,
            data : await UserService.updateUser(userBody, req.params.userId)
        });
    };
    deleteUser = async (req, res) => {
        res.status(StatusCodes.OK)
            .json({message : ReasonPhrases.OK,
            data : await UserService.deleteUser(req.params.userId)
        });
    };

};