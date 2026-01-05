const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const AppError = require("../../utils/AppError"); 
const Service = require("./Service");

module.exports = new (class ListService extends Service {
  getAllLists = async () => {
    const allLists = await this.model.List.find({}).populate("userId");
    return allLists;
  };

  getUserLists = async (userId) => {
    const userLists = await this.model.List.find({ userId });
    return userLists;
  };

  getOneList = async (listId) => {
    const list = await this.model.List.findById(listId);
    if (!list) {
      throw new AppError(ReasonPhrases.NOT_FOUND, StatusCodes.NOT_FOUND);
    }
    return list;
  };

  createList = async (listBody, userId) => {
    const newList = new this.model.List({ ...listBody, userId });
    return await newList.save();
  };

  updateList = async (listBody, listId) => {
    const updatedList = await this.model.List.findByIdAndUpdate(
      listId,
      listBody,
      { new: true, runValidators: true }
    );

    if (!updatedList) {
      throw new AppError(ReasonPhrases.NOT_FOUND, StatusCodes.NOT_FOUND);
    }
    return updatedList;
  };

  deleteList = async (listId) => {
    const deletedList = await this.model.List.findByIdAndDelete(listId);
    
    if (!deletedList) {
      throw new AppError(ReasonPhrases.NOT_FOUND, StatusCodes.NOT_FOUND);
    }
    await this.model.Task.updateMany({ listId }, { listId: null });
    
    return deletedList;
  };
})();