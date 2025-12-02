const express = require('express');
const {AdminUserController, AdminTodoController} = require('../controllers'); 
const adminRouter = express.Router();


adminRouter.route('/users')
.get(AdminUserController.getAllUsers)
.post(AdminUserController.createUser);

adminRouter.route('/users/:userId')
.get(AdminUserController.getUser)
.put(AdminUserController.updateUser)
.delete(AdminUserController.deleteUser);

adminRouter.route('/todos')
.get(AdminTodoController.getAllTodos);

adminRouter.route('/users/:userId/todos')
.get(AdminTodoController.getUserTodos)
.post(AdminTodoController.createTodo);

adminRouter.route('/todos/:todoId')
.put(AdminTodoController.updateTodo)
.delete(AdminTodoController.deleteTodo);



module.exports = adminRouter;