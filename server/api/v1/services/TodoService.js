const Service = require('./Service');

module.exports = new class TodoService extends Service {
    async getAllTodos () {
        try{
            const allTodos = await this.model.Todo.find({}).populate('userId');
            if(allTodos) return allTodos;
        }catch (error) {
            throw error;
        };
    };
    async getUserTodos (userId) {
        try{
            const userTodos = await this.model.User.findById(userId);
            if(userTodos) return userTodos;
        }catch (error) {
            throw error;
        };
    };
    async createTodo (todoBody, userId){
        try{
            const newTodo = new this.model.Todo({...todoBody,userId});
            return await newTodo.save()
        }catch (error) {
            throw error;
        };
    };
    
    async updateTodo (todoBody, todoId) {
        try{
            const updatedTodo = await this.model.Todo.findByIdAndUpdate(todoId, todoBody, {new : true});
            if(updatedTodo) return updatedTodo;
        }catch (error) {
            throw error;
        };
       
    };
    async deleteTodo (todoId){
        try{
            return await this.model.Todo.findByIdAndDelete(todoId);
        }catch (error) {
            throw error;
        };
    };
};