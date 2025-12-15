const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const TodoService = require("../../services/TodoService");
const { createDTO, updateDTO } = require("../../DTOs/todoDTO");

module.exports = new (class AdminTodoController {
  getAll = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const data = await TodoService.getAll();
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

  getOne = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const data = await TodoService.getOne(req.params.todoId);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };

  create = async (req, res, next) => {
    try {
      const todoBody = createDTO(req.body);
      const message = ReasonPhrases.OK;
      const data = await TodoService.create(todoBody, req.params.userId);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      const todoBody = updateDTO(req.body);
      const message = ReasonPhrases.OK;
      const data = await TodoService.update(todoBody, req.params.todoId);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };

  delete = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const data = await TodoService.delete(req.params.todoId);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };
})();
