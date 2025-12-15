const Service = require("./Service");
const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const AppError = require("../../../utils/AppError");
const { default: mongoose } = require("mongoose");
module.exports = new (class UserService extends Service {
  getAll = async () => {
    const allUsers = await this.model.User.find({});
    if (allUsers) return allUsers;
  };

  getOne = async (userId) => {
    const user = await this.model.User.findById(userId);
    if (!user)
      throw new AppError(ReasonPhrases.NOT_FOUND, StatusCodes.NOT_FOUND);
    return user;
  };

  create = async (userBody) => {
    const newUser = new this.model.User(userBody);
    return await newUser.save();
  };

  update = async (userBody, userId) => {
    const updatedUser = await this.model.User.findByIdAndUpdate(
      userId,
      userBody,
      { new: true }
    );
    if (!updatedUser)
      throw new AppError(ReasonPhrases.NOT_FOUND, StatusCodes.NOT_FOUND);
    return updatedUser;
  };

  delete = async (userId) => {
    const session = await mongoose.startSession();

    try {
      session.startTransaction();

      const user = await this.model.User.findById(userId).session(session);
      if (!user) {
        throw new AppError("User not found", StatusCodes.NOT_FOUND);
      }

      await this.model.Todo.deleteMany({ userId }, { session });
      const deletedUser = await this.model.User.findByIdAndDelete(userId, {
        session,
      });

      await session.commitTransaction();
      return deletedUser;
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  };
})();
