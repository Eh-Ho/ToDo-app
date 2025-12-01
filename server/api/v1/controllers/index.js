


module.exports = {
    // admin
    AdminTodoController : require(`${config.path.controllers}/admin/AdminTodoController`),
    AdminUserController : require(`${config.path.controllers}/admin/AdminUserController`),


    //public
    HomeController : require(`${config.path.controllers}/public/HomeController`),
    AuthController : require(`${config.path.controllers}/public/AuthController`),


    //user
    TodoController : require(`${config.path.controllers}/user/TodoController`),
    ProfileController : require(`${config.path.controllers}/user/ProfileController`),
}