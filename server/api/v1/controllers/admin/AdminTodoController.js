const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const TodoService = require('../../services/TodoService');

module.exports = new class AdminTodoController {
    getAllTodos = async (req, res) => {
        res.status(StatusCodes.OK).json({message  : ReasonPhrases.OK, data : TodoService.getAllTodos()});
    };
    getUserTodos = async (req, res) => {
        res.status(StatusCodes.OK).json({message : StatusCodes.OK, data : TodoService.getUserTodos(req.params.userId)});
    };
    createTodo = async (req, res) => {
        // TODO use DTO
        const todoInfo = req.body;
        res.status(StatusCodes.OK).json({message : StatusCodes.OK, data : TodoService.createTodo(todoInfo, req.params.userId)});
    };
    updateTodo = async (req, res) => {
        // TODO use DTO
        const todoInfo = req.body;
        res.status(StatusCodes.OK).json({message : StatusCodes.OK, data : TodoService.updateTodo(todoInfo, req.params.todoId)});
    };
    deleteTodo = async (req, res) => {
        res.status(StatusCodes.OK).json({message : StatusCodes.OK, data : TodoService.deleteTodo(req.params.todoId)});
    };

};