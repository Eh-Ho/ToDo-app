const express = require("express");
const {
  TaskController,
  ProfileController,
  ListController,
} = require("../controllers");
const Validator = require("../middlewares/validator");
const {
  taskIdValidation,
  listIdValidation,
} = require("../validations/idValidation");
const {
  createListValidation,
  updateListValidation,
} = require("../validations/listValidation");
const {
  createTaskValidation,
  updateTaskValidation,
} = require("../validations/taskValidations");

const userRouter = express.Router();

//lists
userRouter
  .route("/lists")
  .get(ListController.getAll)
  .post(createListValidation, Validator, ListController.create);
userRouter
  .route("/lists/:listId")
  .get(listIdValidation, Validator, ListController.getOne)
  .put(listIdValidation, updateListValidation, Validator, ListController.update)
  .delete(listIdValidation, Validator, ListController.delete);

//profile info

//tasks
userRouter.route("/tasks/today").get(TaskController.getToday);

userRouter
  .route("/tasks")
  .get(TaskController.getAll)
  .post(createTaskValidation, Validator, TaskController.create);

userRouter
  .route("/task/:taskId")
  .get(taskIdValidation, Validator, TaskController.getOne)
  .put(taskIdValidation, updateTaskValidation, Validator, TaskController.update)
  .delete(taskIdValidation, Validator, TaskController.delete);

module.exports = userRouter;
