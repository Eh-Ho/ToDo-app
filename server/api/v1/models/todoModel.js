const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    todoTitle : {type : String, required : true},
    todoDescription : {type : String, required : true},
    todoCompleted : {type : Boolean, default : false},
    todoUser : {type : Schema.Types.ObjectId, ref : 'User', required : true},
},{timestamps : true});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;