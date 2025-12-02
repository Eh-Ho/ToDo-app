


module.exports = {
    // admin
    AdminTodoController : require('./admin/AdminTodoController'),
    AdminUserController : require('./admin/AdminUserController'),


    //public
    HomeController : require('./public/HomeController'),
    AuthController : require('./public/AuthController'),


    //user
    TodoController : require('./user/TodoController'),
    ProfileController : require('./user/ProfileController'),
}