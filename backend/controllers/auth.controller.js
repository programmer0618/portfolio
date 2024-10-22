const BaseError = require("../errors/base.error");
const AuthService = require("../services/auth.service");
const { validationResult } = require("express-validator");

class AuthController {
  async register(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return BaseError.BadRequest("Error with validation!", errors.array());
      }

      const user = await AuthService.register(req.body);
      res.cookie("refreshToken", user.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        secure: true,
      });
      res.status(201).json(user);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async login(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return BaseError.BadRequest("Error with validation!", errors.array());
      }

      const { email, password } = req.body;
      const user = await AuthService.login({ email, password });
      res.cookie("refreshToken", user.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        secure: true,
      });

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const data = await AuthService.logout(refreshToken);
      res.clearCookie("refreshToken");
      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const data = await AuthService.refresh(refreshToken);
      res.cookie("refreshToken", data.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });

      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  async getUser(req, res, next) {
    try {
      const authorization = req.headers.authorization;
      const user = await AuthService.getUser(authorization);
      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
  async updateUser(req, res, next) {
    try {
      const authorization = req.headers.authorization;
      let files = "";
      if (req.files) {
        files = req.files.image;
      }
      const updateUser = await AuthService.updateUser(
        req.body,
        authorization,
        files
      );
      return res.status(200).json(updateUser);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = new AuthController();
