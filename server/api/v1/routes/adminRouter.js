const express = require("express");
const {
  AdminUserController,
  AdminTaskController,
  AdminListController,
} = require("../controllers");
const {
  createUserValidation,
  updateUserValidation,
} = require("../validations/userValidations");
const {
  taskIdValidation,
  listIdValidation,
  userIdValidation,
} = require("../validations/idValidation");
const {
  createListValidation,
  updateListValidation,
} = require("../validations/listValidation");
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
  .get(userIdValidation, Validator, AdminUserController.getOne)
  .put(
    userIdValidation,
    updateUserValidation,
    Validator,
    AdminUserController.update
  )
  .delete(userIdValidation, Validator, AdminUserController.delete);

//lists
adminRouter.route("/lists").get(AdminListController.getAll);
adminRouter
  .route("/users/:userId/lists")
  .get(userIdValidation, Validator, AdminListController.getUserLists)
  .post(
    userIdValidation,
    createListValidation,
    Validator,
    AdminListController.create
  );
adminRouter
  .route("/lists/:listId")
  .get(listIdValidation, Validator, AdminListController.getOne)
  .put(
    listIdValidation,
    updateListValidation,
    Validator,
    AdminListController.update
  )
  .delete(listIdValidation, Validator, AdminListController.delete);

//tasks
adminRouter.route("/tasks").get(AdminTaskController.getAll);

adminRouter
  .route("/users/:userId/tasks")
  .get(userIdValidation, Validator, AdminTaskController.getUserTasks)
  .post(
    userIdValidation,
    createTaskValidation,
    Validator,
    AdminTaskController.create
  );

adminRouter
  .route("/tasks/:taskId")
  .get(taskIdValidation, Validator, AdminTaskController.getOne)
  .put(
    taskIdValidation,
    updateTaskValidation,
    Validator,
    AdminTaskController.update
  )
  .delete(taskIdValidation, Validator, AdminTaskController.delete);

module.exports = adminRouter;
