const UserService = require("../../services/UserService");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { createDTO, updateDTO } = require("../../DTOs/userDTO");

module.exports = new (class AdminUserController {
  getAll = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const data = await UserService.getAll();
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };

  getOne = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const data = await UserService.getOne(req.params.userId);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };

  create = async (req, res, next) => {
    try {
      const userBody = adminCreateDTO(req.body);
      const message = ReasonPhrases.OK;
      const data = await UserService.create(userBody);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      const userBody = adminUpdateDTO(req.body);
      const message = ReasonPhrases.OK;
      const data = await UserService.update(userBody, req.params.userId);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };

  delete = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const data = await UserService.delete(req.params.userId);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };
})();
