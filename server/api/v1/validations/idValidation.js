const { body, param } = require("express-validator");

const taskIdValidation = [
  param("taskId").isMongoId().withMessage("Invalid Task ID format"),
];
const userIdValidation = [
  param("userId").isMongoId().withMessage("Invalid User ID format"),
];
const listIdValidation = [
  param("listId").isMongoId().withMessage("Invalid List ID format"),
];
module.exports = { taskIdValidation, userIdValidation, listIdValidation };
