const express = require("express");
const { AdminUserController, AdminTodoController } = require("../controllers");
const {
  createUserValidation,
  updateUserValidation,
} = require("../validations/userValidations");
const {
  createTodoValidation,
  updateTodoValidation,
} = require("../validations/todoValidations");
const Validator = require("../middlewares/validator");

const adminRouter = express.Router();

adminRouter
  .route("/users")
  .get(AdminUserController.getAll)
  .post(createUserValidation, Validator, AdminUserController.create);

adminRouter
  .route("/users/:userId")
  .get(AdminUserController.getOne)
  .put(updateUserValidation, Validator, AdminUserController.update)
  .delete(AdminUserController.delete);

adminRouter.route("/todos").get(AdminTodoController.getAll);

adminRouter
  .route("/users/:userId/todos")
  .get(AdminTodoController.getUserTodos)
  .post(createTodoValidation, Validator, AdminTodoController.create);

adminRouter
  .route("/todos/:todoId")
  .get(AdminTodoController.getOne)
  .put(updateTodoValidation, Validator, AdminTodoController.update)
  .delete(AdminTodoController.delete);

module.exports = adminRouter;
