const express = require("express");
const { TaskController, ProfileController } = require("../controllers");
const userRouter = express.Router();

userRouter
  .route("/tasks")
  .get(TaskController.getUserTasks())
  .post(TaskController.create);
userRouter
  .route("/task/:id")
  .get(TaskController.getOne)
  .put(TaskController.update)
  .delete(TaskController.delete);

module.exports = userRouter;
