


module.exports = {
    // admin
    AdminTodoController : require(`${config.controllers}/admin/AdminTodoController`),
    AdminUserController : require(`${config.controllers}/admin/AdminUserController`),


    //public
    HomeController : require(`${config.controllers}/public/HomeController`),
    AuthController : require(`${config.controllers}/public/AuthController`),


    //user
    TodoController : require(`${config.controllers}/user/TodoController`),
    ProfileController : require(`${config.controllers}/user/ProfileController`),
}