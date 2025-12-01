const express = require('express');
const {AdminUserController, AdminTodoController} = require(`${config.path.controllers}`); 
const adminRouter = express.Router();


adminRouter.route('/users')
.get(AdminUserController.getAllUsers.bind(AdminUserController))
.post(AdminUserController.createUser.bind(AdminUserController));
adminRouter.route('/users/:userId')
.get(AdminUserController.getUser.bind(AdminUserController))
.put(AdminUserController.updateUser.bind(AdminUserController))
.delete(AdminUserController.deleteUser.bind(AdminUserController));


module.exports = adminRouter;