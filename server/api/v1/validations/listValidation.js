const { body, param } = require("express-validator");
const { ALLOWED_COLORS } = require("../constants");

const createListValidation = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("List title is required")
    .isLength({ max: 50 })
    .withMessage("List title cannot exceed 50 characters"),

  body("icon").trim().notEmpty().withMessage("Icon is required").isString(),

  body("color")
    .trim()
    .notEmpty()
    .withMessage("Color is required")
    .isIn(ALLOWED_COLORS)
    .withMessage(`Color must be one of: ${ALLOWED_COLORS.join(", ")}`),
];

const updateListValidation = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("List title is required")
    .isLength({ max: 50 })
    .withMessage("List title cannot exceed 50 characters"),

  body("icon").trim().notEmpty().withMessage("Icon is required"),

  body("color")
    .trim()
    .notEmpty()
    .withMessage("Color is required")
    .isIn(ALLOWED_COLORS)
    .withMessage(`Color must be valid`),
];

module.exports = {
  createListValidation,
  updateListValidation,
};
