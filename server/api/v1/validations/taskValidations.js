const { body, param } = require("express-validator");

const ALLOWED_COLORS = [
  "gray", "red", "yellow", "blue", "green", "indigo", "purple", "pink"
];

const createTaskValidation = [
  body("title")
    .trim()
    .notEmpty().withMessage("Title is required")
    .isLength({ max: 100 }).withMessage("Title cannot exceed 100 characters"),

  body("description")
    .optional()
    .trim()
    .notEmpty().withMessage("Description cannot be empty if provided"),

  body("listId")
    .optional({ checkFalsy: true }) 
    .isMongoId().withMessage("Invalid List ID format"),

  body("dueDate")
    .optional({ checkFalsy: true })
    .isISO8601().withMessage("Due date must be a valid date format (ISO8601)")
    .toDate(),

  body("tags")
    .optional()
    .isArray().withMessage("Tags must be an array"),

  body("tags.*.text")
    .trim()
    .notEmpty().withMessage("Tag text is required")
    .isString(),

  body("tags.*.color")
    .trim()
    .isIn(ALLOWED_COLORS).withMessage(`Color must be one of: ${ALLOWED_COLORS.join(", ")}`),
];

const updateTaskValidation = [
  param("taskId").isMongoId().withMessage("Invalid Task ID format"),

  body("title")
    .optional()
    .trim()
    .notEmpty().withMessage("Title cannot be empty"),

  body("description")
    .optional()
    .trim(),

  body("completed")
    .optional()
    .isBoolean().withMessage("Completed must be a boolean")
    .toBoolean(),

  body("dueDate")
    .optional({ nullable: true }) 
    .isISO8601().withMessage("Due date must be a valid date format")
    .toDate(),

  body("listId")
    .optional({ nullable: true }) 
    .isMongoId().withMessage("Invalid List ID format"),

  body("tags")
    .optional()
    .isArray().withMessage("Tags must be an array"),

  body("tags.*.text")
    .optional()
    .trim()
    .notEmpty().withMessage("Tag text cannot be empty"),

  body("tags.*.color")
    .optional()
    .trim()
    .isIn(ALLOWED_COLORS).withMessage(`Color must be one of: ${ALLOWED_COLORS.join(", ")}`),
];

module.exports = { createTaskValidation, updateTaskValidation };