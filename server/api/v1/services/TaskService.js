const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const AppError = require("../../../utils/AppError");
const Service = require("./Service");

module.exports = new (class TaskService extends Service {
  getAllTasks = async () => {
    const allTasks = await this.model.Task.find({}).populate("userId");
    return allTasks;
  };

  getTodaysTasks = async (userId) => {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const tasks = await this.model.Task.find({
      userId,
      dueDate: {
        $gte: startOfDay,
        $lte: endOfDay,
      },
    }).populate("listId");

    return tasks;
  };

  getUserTasks = async (userId) => {
    const userTasks = await this.model.Task.find({ userId });
    return userTasks;
  };

  getOneTask = async (taskId) => {
    const userTasks = await this.model.Task.findById(taskId);
    return userTasks;
  };

  createTask = async (taskBody, userId) => {
    const newTask = new this.model.Task({ ...taskBody, userId });
    return await newTask.save();
  };

  updateTask = async (taskBody, taskId) => {
    const updatedTask = await this.model.Task.findByIdAndUpdate(
      taskId,
      taskBody,
      { new: true }
    );
    if (!updatedTask) {
      throw new AppError(ReasonPhrases.NOT_FOUND, StatusCodes.NOT_FOUND);
    }
    return updatedTask;
  };

  deleteTask = async (taskId) => {
    const deletedTod = await this.model.Task.findByIdAndDelete(taskId);
    if (!deletedTod) {
      throw new AppError(ReasonPhrases.NOT_FOUND, StatusCodes.NOT_FOUND);
    }
  };
})();
