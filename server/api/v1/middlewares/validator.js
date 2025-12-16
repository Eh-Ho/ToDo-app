const { validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");

const AppError = require("../../../utils/AppError");

module.exports = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new AppError("Validation Error", StatusCodes.BAD_REQUEST);
    error.expressValidationErrors = errors.array();
    throw error;
  }
  next();
};
