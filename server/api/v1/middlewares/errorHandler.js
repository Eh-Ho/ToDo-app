const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const errorHandler = (err, req, res, next) => {
  console.error("--- ERROR START ---");
  console.error("Name:   ", err.name);
  console.error("Message:", err.message);
  console.error("Status: ", err.statusCode);
  console.error("Stack:  ", err.stack);
  console.error("--- ERROR END ---");

  let statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  let message =
    err.isOperational && err.message
      ? err.message
      : ReasonPhrases.INTERNAL_SERVER_ERROR;

  if (err.name === "CastError") {
    statusCode = StatusCodes.BAD_REQUEST;
    message = "Invalid ID format";
  }

  if (err.expressValidationErrors) {
    statusCode = StatusCodes.BAD_REQUEST;
    message = err.expressValidationErrors.map((e) => e.msg).join(", ");
  }

  if (err.name === "ValidationError") {
    statusCode = StatusCodes.BAD_REQUEST;
    message = Object.values(err.errors)
      .map((e) => e.message)
      .join(", ");
  }

  if (err.code === 11000) {
    statusCode = StatusCodes.CONFLICT;
    message = "Duplicate key error";
  }

  if (err.name === "JsonWebTokenError") {
    statusCode = StatusCodes.UNAUTHORIZED;
    message = "Invalid token";
  }

  if (err.name === "TokenExpiredError") {
    statusCode = StatusCodes.UNAUTHORIZED;
    message = "Token expired";
  }

  res.status(statusCode).json({
    message,
    ...(process.env.NODE_ENV !== "production" && { stack: err.stack }),
  });
};

module.exports = errorHandler;
