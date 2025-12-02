const User = require('../models/userModel');
const Todo = require('../models/todoModel');



module.exports = class Service {
    constructor(){
        this.model = {User, Todo};
    }
};