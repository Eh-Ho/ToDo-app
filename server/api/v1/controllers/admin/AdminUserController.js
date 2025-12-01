const UserService = require(`${config.path.services}/UserService`);
const {StatusCodes, ReasonPhrases} = require('http-status-codes');

module.exports = new class AdminUserController  {
    async getAllUsers (req, res) {
        res.status(StatusCodes.OK)
            .json({message : ReasonPhrases.OK,
            data : UserService.getAllUsers()
        });
    };

    async getUser (req, res) {
        res.status(StatusCodes.OK)
            .json({message : ReasonPhrases.OK,
            data : UserService.getUser()
        });
    };

    async createUser (req, res) {
        // TODO: dto implementation
        const newUser = req.body;
        
        res.status(StatusCodes.OK)
            .json({message : ReasonPhrases.OK,
            data : UserService.createUser(newUser)
        });
    };

    async updateUser (req, res) {
        // TODO: dto implementation
        const updatedUser = req.body;
        
        res.status(StatusCodes.OK)
            .json({message : ReasonPhrases.OK,
            data : UserService.updateUser(updatedUser, req.params.userId)
        });
    };
    async deleteUser (req, res) {
        res.status(StatusCodes.OK)
            .json({message : ReasonPhrases.OK,
            data : UserService.deleteUser(req.params.userId)
        });
    };

};