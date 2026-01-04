const express = require("express");
const { AdminUserController, AdminTaskController } = require("../controllers");
const {
  createUserValidation,
  updateUserValidation,
} = require("../validations/userValidations");
const {
  createTaskValidation,
  updateTaskValidation,
} = require("../validations/taskValidations");
const Validator = require("../middlewares/validator");

const adminRouter = express.Router();

//users
adminRouter
  .route("/users")
  .get(AdminUserController.getAll)
  .post(createUserValidation, Validator, AdminUserController.create);

adminRouter
  .route("/users/:userId")
  .get(AdminUserController.getOne)
  .put(updateUserValidation, Validator, AdminUserController.update)
  .delete(AdminUserController.delete);


//tasks
adminRouter.route("/tasks").get(AdminTaskController.getAll);

adminRouter
  .route("/users/:userId/tasks")
  .get(AdminTaskController.getUserTasks)
  .post(createTaskValidation, Validator, AdminTaskController.create);

adminRouter
  .route("/tasks/:taskId")
  .get(AdminTaskController.getOne)
  .put(updateTaskValidation, Validator, AdminTaskController.update)
  .delete(AdminTaskController.delete);

module.exports = adminRouter;
