const { body, param } = require("express-validator");
const { ALLOWED_ROLES } = require("../constants");
const createUserValidation = [
  body("name").trim().notEmpty().withMessage("Name is required"),

  body("email")
    .trim()
    .isEmail()
    .withMessage("Invalid email address")
    .normalizeEmail(),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),

  body("role")
    .trim()
    .notEmpty()
    .withMessage("Role is required")
    .isIn(ALLOWED_ROLES)
    .withMessage("Role must be 'user' or 'admin'"),
];

const updateUserValidation = [
  body("name").trim().notEmpty().withMessage("Name is required"),

  body("email")
    .trim()
    .isEmail()
    .withMessage("Invalid email address")
    .normalizeEmail(),

  body("password")
    .optional()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),

  body("role")
    .optional()
    .isIn(ALLOWED_ROLES)
    .withMessage("Invalid role specified"),
];

module.exports = { createUserValidation, updateUserValidation };
