module.exports = {
  // admin
  AdminTodoController: require("./admin/AdminTaskController"),
  AdminUserController: require("./admin/AdminUserController"),

  //public
  HomeController: require("./public/HomeController"),
  AuthController: require("./public/AuthController"),

  //user
  TodoController: require("./user/TaskController"),
  ProfileController: require("./user/ProfileController"),
};
