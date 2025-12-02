const Service = require('./Service');

module.exports = new class UserService extends Service {
    async getAllUsers () {
        try{
            const users = await this.model.User.find({});
            if(users) return users;
        }catch(error){
            throw error
        };
    };

    async getUser (userId) {
        try{
            const user = await this.model.User.findById(userId).populate('userTodos');
            if(user) return user;
        }catch(error){
            throw error
        };
    };

    async createUser (userInfo) {
        try{
            const newUser = new this.model.User(userInfo);
            return await newUser.save();
        }catch(error){
            throw error
        };
    };

    async updateUser (userInfo, userId) {
        try{
            const updatedUser = await this.model.User.findByIdAndUpdate(userId, userInfo, {new : true});
            return updatedUser
        }catch(error){
            throw error
        };

    };
    async deleteUser (userId) {
        try{
            return await this.model.User.findByIdAndDelete(userId);
        }catch(error){
            throw error
        };
    };
};