module.exports = {
  // admin
  AdminTaskController: require("./admin/AdminTaskController"),
  AdminUserController: require("./admin/AdminUserController"),

  //public
  HomeController: require("./public/HomeController"),
  AuthController: require("./public/AuthController"),

  //user
  TaskController: require("./user/TaskController"),
  ProfileController: require("./user/ProfileController"),
};
