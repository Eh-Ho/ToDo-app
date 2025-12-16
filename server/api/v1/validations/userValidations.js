const { body, param } = require("express-validator");

const createUserValidation = [
  body("name").trim().notEmpty().withMessage("Name is required").escape(),

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
    .isIn(["user", "admin"])
    .withMessage("Role must be 'user' or 'admin'"),
];

const updateUserValidation = [
  param("userId").optional().isMongoId().withMessage("Invalid User ID format"),

  body("name").trim().notEmpty().withMessage("Name is required").escape(),

  body("email")
    .trim()
    .isEmail()
    .withMessage("Invalid email address")
    .normalizeEmail(),

  body("password")
    .optional()
    .trim()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),

  body("role")
    .optional()
    .isIn(["user", "admin"])
    .withMessage("Invalid role specified"),
];

module.exports = { createUserValidation, updateUserValidation };
