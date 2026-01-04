const express = require("express");
const {
  TaskController,
  ProfileController,
  ListController,
} = require("../controllers");
const userRouter = express.Router();


//lists
userRouter.route("/lists").get(ListController.getAll).post(ListController.create);
userRouter.route("/lists/:listId").get(ListController.getOne).put(ListController.update).delete(ListController.delete);

//profile info



//tasks
userRouter.route("/tasks/today").get(TaskController.getToday)

userRouter
  .route("/tasks")
  .get(TaskController.getAll)
  .post(TaskController.create);

userRouter
  .route("/task/:taskId")
  .get(TaskController.getOne)
  .put(TaskController.update)
  .delete(TaskController.delete);

module.exports = userRouter;
