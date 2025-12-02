const Service = require('./Service');

module.exports = new class UserService extends Service {
    async getAllUsers () {
        try{
            const allUsers = await this.model.User.find({});
            if(allUsers) return allUsers;
        }catch(error){
            throw error
        };
    };

    async getUser (userId) {
        try{
            const user = await this.model.User.findById(userId);
            if(user) return user;
        }catch(error){
            throw error
        };
    };

    async createUser (userBody) {
        try{
            const newUser = new this.model.User(userBody);
            return await newUser.save();
        }catch(error){
            throw error
        };
    };

    async updateUser (userBody, userId) {
        try{
            const updatedUser = await this.model.User.findByIdAndUpdate(userId, userBody, {new : true});
            return updatedUser
        }catch(error){
            throw error
        };

    };
    async deleteUser (userId) {
        try{
            //TODO warp it in a transction
            await this.model.Todo.deleteMany({ userId });
            return await this.model.User.findByIdAndDelete(userId);
        }catch(error){
            throw error
        };
    };
};