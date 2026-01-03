const { body, param } = require("express-validator");

const createTaskValidation = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ max: 100 })
    .withMessage("Title cannot exceed 100 characters"),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ min: 5 })
    .withMessage("Description must be at least 5 characters"),
];

const updateTaskValidation = [
  param("taskId").isMongoId().withMessage("Invalid Task ID format"),

  body("title")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Title cannot be empty"),

  body("description")
    .optional()
    .trim()
    .isLength({ min: 5 })
    .withMessage("Description must be at least 5 characters"),

  body("completed")
    .optional()
    .isBoolean()
    .withMessage("Completed must be a boolean (true/false)")
    .toBoolean(),
];

module.exports = { createTaskValidation, updateTaskValidation };
