const User = require(`${config.path.models}/userModel`);
const Todo = require(`${config.path.models}/todoModel`);



module.exports = class Service {
    constructor(){
        this.model = {User, Todo};
    }
};