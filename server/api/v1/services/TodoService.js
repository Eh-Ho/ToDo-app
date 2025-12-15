const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const AppError = require("../../../utils/AppError");
const Service = require("./Service");

module.exports = new (class TodoService extends Service {
  async getAll() {
    const allTodos = await this.model.Todo.find({}).populate("userId");
    return allTodos;
  }

  async getUserTodos(userId) {
    const userTodos = await this.model.Todo.find({ userId });
    return userTodos;
  }

  async create(todoBody, userId) {
    const newTodo = new this.model.Todo({ ...todoBody, userId });
    return await newTodo.save();
  }

  async update(todoBody, todoId) {
    const updatedTodo = await this.model.Todo.findByIdAndUpdate(
      todoId,
      todoBody,
      { new: true }
    );
    if (!updatedTodo) {
      throw new AppError(ReasonPhrases.NOT_FOUND, StatusCodes.NOT_FOUND);
    }
    return updatedTodo;
  }

  async delete(todoId) {
    const deletedTod = await this.model.Todo.findByIdAndDelete(todoId);
    if (!deletedTod) {
      throw new AppError(ReasonPhrases.NOT_FOUND, StatusCodes.NOT_FOUND);
    }
  }
})();
