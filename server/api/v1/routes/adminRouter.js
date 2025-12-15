const express = require("express");
const { AdminUserController, AdminTodoController } = require("../controllers");
const adminRouter = express.Router();

adminRouter
  .route("/users")
  .get(AdminUserController.getAll)
  .post(AdminUserController.create);

adminRouter
  .route("/users/:userId")
  .get(AdminUserController.getOne)
  .put(AdminUserController.update)
  .delete(AdminUserController.delete);

adminRouter.route("/todos").get(AdminTodoController.getAll);

adminRouter
  .route("/users/:userId/todos")
  .get(AdminTodoController.getUserTodos)
  .post(AdminTodoController.create);

adminRouter
  .route("/todos/:todoId")
  .get(AdminTodoController.getOne)
  .put(AdminTodoController.update)
  .delete(AdminTodoController.delete);

module.exports = adminRouter;
