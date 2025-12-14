const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const TodoService = require("../../services/TodoService");
const { createDTO, updateDTO } = require("../../DTOs/todoDTO");

module.exports = new (class AdminTodoController {
  getAllTodos = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const data = await TodoService.getAllTodos();
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };

  getUserTodos = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const data = await TodoService.getUserTodos(req.params.userId);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };

  createTodo = async (req, res, next) => {
    try {
      const todoBody = createDTO(req.body);
      const message = ReasonPhrases.OK;
      const data = await TodoService.createTodo(todoBody, req.params.userId);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };

  updateTodo = async (req, res, next) => {
    try {
      const todoBody = updateDTO(req.body);
      const message = ReasonPhrases.OK;
      const data = await TodoService.updateTodo(todoBody, req.params.todoId);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };

  deleteTodo = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const data = await TodoService.deleteTodo(req.params.todoId);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };
})();
