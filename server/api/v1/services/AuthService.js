const Service = require("./Service");
const jwt = require("jsonwebtoken");
const AppError = require("../../../utils/AppError");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

module.exports = new (class AuthService extends Service {
  login = async (loginBody) => {
    try {
      const user = await this.model.User.findOne({ email: loginBody.email });
      if (!user) {
        throw new AppError("Invalid credentials", StatusCodes.UNAUTHORIZED);
      }
      const isMatch = await user.comparePassword(loginBody.password);
      if (!isMatch) {
        throw new AppError("Invalid credentials", StatusCodes.UNAUTHORIZED);
      }
      const payload = { id: user._id, role: user.role };
      const newAccessToken = jwt.sign(
        payload,
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXP }
      );
      const newRefreshToken = jwt.sign(
        payload,
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXP }
      );
      user.refreshTokens = [...user.refreshTokens, newRefreshToken];
      await user.save();
      return { newAccessToken, newRefreshToken, user };
    } catch (error) {
      throw error;
    }
  };

  logout = async (refreshToken) => {
    const user = await this.model.User.findOne({ refreshTokens: refreshToken });

    if (user) {
      user.refreshTokens = user.refreshTokens.filter(
        (rt) => rt !== refreshToken
      );
      await user.save();
    }
  };

  signup = async (signUpBody) => {
    try {
      const existingUser = await this.model.User.findOne({
        email: signUpBody.email,
      });
      if (existingUser) {
        throw new AppError("Email already in use", StatusCodes.CONFLICT);
      }
      const newUser = new this.model.User(signUpBody);
      await newUser.save();
      return newUser;
    } catch (error) {
      throw error;
    }
  };

  refresh = async (refreshToken) => {
    try {
      let decoded;
      try {
        decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
      } catch (err) {
        throw new AppError(
          "Invalid or expired refresh token",
          StatusCodes.UNAUTHORIZED
        );
      }
      const user = await this.model.User.findOne({
        refreshTokens: refreshToken,
      });

      if (!user) {
        const hackedUser = await this.model.User.findById(decoded.id);
        if (hackedUser) {
          hackedUser.refreshTokens = [];
          await hackedUser.save();
        }
        throw new AppError("Forbidden", StatusCodes.FORBIDDEN);
      }

      const remainingRefreshTokens = user.refreshTokens.filter(
        (rt) => rt != refreshToken
      );

      if (user._id.toString() !== decoded.id) {
        user.refreshTokens = remainingRefreshTokens;
        await user.save();
        throw new AppError("Forbidden", StatusCodes.FORBIDDEN);
      }
      const payload = { id: user._id, role: user.role };
      const newAccessToken = jwt.sign(
        payload,
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXP }
      );
      const newRefreshToken = jwt.sign(
        payload,
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXP }
      );

      user.refreshTokens = [...remainingRefreshTokens, newRefreshToken];
      await user.save();

      return { newAccessToken, newRefreshToken };
    } catch (error) {
      throw error;
    }
  };
})();
