const TaskService = require("../../services/TaskService");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { createDTO, updateDTO } = require("../../DTOs/taskDTO");
module.exports = new (class TaskController {
  getToday = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const data = await TaskService.getTodaysTasks(req.user.id);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };

  getAll = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const data = await TaskService.getUserTasks(req.user.id);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };
  getOne = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const data = await TaskService.getOneTask(req.params.taskId);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };
  create = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const taskBody = createDTO(req.body);
      const data = await TaskService.createTask(taskBody, req.user.id);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };
  delete = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const data = await TaskService.deleteTask(req.params.taskId);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };
  update = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const taskBody = updateDTO(req.body);
      const data = await TaskService.update(taskBody, req.params.taskId);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };
})();
