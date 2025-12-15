const UserService = require("../../services/UserService");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { createDTO, updateDTO } = require("../../DTOs/userDTO");

module.exports = new (class AdminUserController {
  getAllUsers = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const data = await UserService.getAll();
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };

  getUser = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const data = await UserService.getOne(req.params.userId);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };

  createUser = async (req, res, next) => {
    try {
      const userBody = createDTO(req.body);
      const message = ReasonPhrases.OK;
      const data = await UserService.create(userBody);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };

  updateUser = async (req, res, next) => {
    try {
      const userBody = updateDTO(req.body);
      const message = ReasonPhrases.OK;
      const data = await UserService.update(userBody, req.params.userId);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };

  deleteUser = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const data = await UserService.delete(req.params.userId);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };
})();
