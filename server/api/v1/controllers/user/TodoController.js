const TodoService = require("../../services/TodoService");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { createDTO, updateDTO } = require("../../DTOs/todoDTO");
module.exports = new (class TodoController {
  getUserTodos = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const data = await TodoService.getUserTodos(req.user.id);
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
      const message = ReasonPhrases.OK;
      const todoBody = createDTO(req.body);
      const data = await TodoService.create(todoBody, req.user.id);
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
  update = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const todoBody = updateDTO(req.body);
      const data = await TodoService.update(todoBody, req.params.todoId);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };
})();
