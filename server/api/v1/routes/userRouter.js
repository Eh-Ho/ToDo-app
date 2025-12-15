const express = require("express");
const { TodoController, ProfileController } = require("../controllers");
const userRouter = express.Router();

userRouter
  .route("/todos")
  .get(TodoController.getUserTodos())
  .post(TodoController.create);
userRouter
  .route("/todo/:id")
  .get(TodoController.getOne)
  .put(TodoController.update)
  .delete(TodoController.delete);

module.exports = userRouter;
