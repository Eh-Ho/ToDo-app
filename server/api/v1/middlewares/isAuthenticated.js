const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const AppError = require("../../../utils/AppError");

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || req.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new AppError("Authentication required", StatusCodes.UNAUTHORIZED);
    }

    const token = authHeader.split(" ")[1];

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    } catch (err) {
      if (err.name === "TokenExpiredError") {
        throw new AppError("Access token expired", StatusCodes.UNAUTHORIZED);
      }
      throw new AppError("Invalid access token", StatusCodes.UNAUTHORIZED);
    }
    const user = await User.findById(decoded.id);
    if (!user) {
      throw new AppError("User not found", StatusCodes.UNAUTHORIZED);
    }
    req.user = { ...user.toObject(), id: user._id.toString() };
    next();
  } catch (error) {
    next(error);
  }
};
