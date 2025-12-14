const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const AppError = require("../../../utils/AppError");
const Service = require("./Service");

module.exports = new (class TodoService extends Service {
  async getAllTodos() {
    try {
      const allTodos = await this.model.Todo.find({}).populate("userId");
      return allTodos;
    } catch (error) {
      throw error;
    }
  }
  async getUserTodos(userId) {
    try {
      const userTodos = await this.model.Todo.find({ userId });
      return userTodos;
    } catch (error) {
      throw error;
    }
  }
  async createTodo(todoBody, userId) {
    try {
      const newTodo = new this.model.Todo({ ...todoBody, userId });
      return await newTodo.save();
    } catch (error) {
      throw error;
    }
  }

  async updateTodo(todoBody, todoId) {
    try {
      const updatedTodo = await this.model.Todo.findByIdAndUpdate(
        todoId,
        todoBody,
        { new: true }
      );
      if (!updatedTodo) {
        throw new AppError(ReasonPhrases.NOT_FOUND, StatusCodes.NOT_FOUND);
      }
      return updatedTodo;
    } catch (error) {
      throw error;
    }
  }
  async deleteTodo(todoId) {
    try {
      const deletedTod = await this.model.Todo.findByIdAndDelete(todoId);
      if (!deletedTod) {
        throw new AppError(ReasonPhrases.NOT_FOUND, StatusCodes.NOT_FOUND);
      }
    } catch (error) {
      throw error;
    }
  }
})();
