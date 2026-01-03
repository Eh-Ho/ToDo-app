const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const TaskService = require("../../services/TaskService");
const { createDTO, updateDTO } = require("../../DTOs/taskDTO");

module.exports = new (class AdminTaskController {
  getAll = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const data = await TaskService.getAll();
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };

  getUserTasks = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const data = await TaskService.getUserTasks(req.params.userId);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };

  getOne = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const data = await TaskService.getOne(req.params.taskId);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };

  create = async (req, res, next) => {
    try {
      const taskBody = createDTO(req.body);
      const message = ReasonPhrases.OK;
      const data = await TaskService.create(taskBody, req.params.userId);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      const taskBody = updateDTO(req.body);
      const message = ReasonPhrases.OK;
      const data = await TaskService.update(taskBody, req.params.taskId);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };

  delete = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const data = await TaskService.delete(req.params.taskId);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };
})();
