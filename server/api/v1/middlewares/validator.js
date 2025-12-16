const { validationResult } = require("express-validator");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const AppError = require("../../../utils/AppError");

module.exports = (req, res, next) => {
  const errors = validationResult(req);
  const errorMessages = errors.array().map((err) => err.msg);
  if (!errors.isEmpty()) {
    throw new AppError(
      `Validation Error: ${errorMessages.join(", ")}`,
      StatusCodes.BAD_REQUEST
    );
  }
  next();
};
