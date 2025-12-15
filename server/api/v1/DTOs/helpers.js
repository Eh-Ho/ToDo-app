const { StatusCodes } = require("http-status-codes");
const AppError = require("../../../utils/AppError");

const requireFields = (obj, fields) => {
  for (const f of fields) {
    if (obj?.[f] === undefined) {
      throw new AppError(`Missing field: ${f}`, StatusCodes.BAD_REQUEST);
    }
  }
};

module.exports = { requireFields };
