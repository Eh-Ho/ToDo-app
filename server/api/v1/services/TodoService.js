const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const AppError = require("../../../utils/AppError");
const Service = require("./Service");

module.exports = new (class TodoService extends Service {
  getAll = async () => {
    const allTodos = await this.model.Todo.find({}).populate("userId");
    return allTodos;
  };

  getUserTodos = async (userId) => {
    const userTodos = await this.model.Todo.find({ userId });
    return userTodos;
  };

  getOne = async (todoId) => {
    const userTodos = await this.model.Todo.findById(todoId);
    return userTodos;
  };

  create = async (todoBody, userId) => {
    const newTodo = new this.model.Todo({ ...todoBody, userId });
    return await newTodo.save();
  };

  update = async (todoBody, todoId) => {
    const updatedTodo = await this.model.Todo.findByIdAndUpdate(
      todoId,
      todoBody,
      { new: true }
    );
    if (!updatedTodo) {
      throw new AppError(ReasonPhrases.NOT_FOUND, StatusCodes.NOT_FOUND);
    }
    return updatedTodo;
  };

  delete = async (todoId) => {
    const deletedTod = await this.model.Todo.findByIdAndDelete(todoId);
    if (!deletedTod) {
      throw new AppError(ReasonPhrases.NOT_FOUND, StatusCodes.NOT_FOUND);
    }
  };
})();
