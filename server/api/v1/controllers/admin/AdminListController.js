const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const ListService = require("../../services/ListService");
const { createDTO, updateDTO } = require("../../DTOs/listDTO");

module.exports = new (class AdminListController {
  getAll = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const data = await ListService.getAllLists();
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };
  getUserLists = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const data = await ListService.getUserLists(req.params.userId);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };
  getOne = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const data = await ListService.getOneList(req.params.listId);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };
  create = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const listBody = createDTO(req.body);
      const data = await ListService.createList(listBody, req.params.userId);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };
  delete = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const data = await ListService.deleteList(req.params.listId);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };
  update = async (req, res, next) => {
    try {
      const message = ReasonPhrases.OK;
      const listBody = updateDTO(req.body);
      const data = await ListService.updateList(listBody, req.params.listId);
      res.status(StatusCodes.OK).json({ message, data });
    } catch (error) {
      next(error);
    }
  };
})();
