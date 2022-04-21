// to generate and verify the jwt token provided
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
const utils = require("../utils/util")();
const TOKEN_SECRET = process.env.TOKEN_SECRET;

module.exports = function (app) {
  dotenv.config();
  let auth = {};
/*************************generate token***************************** */
  auth.genrateToken = async (data) => {
    try {
      return jwt.sign(data, TOKEN_SECRET);
    } catch (error) {
      throw error;
    }
  };
/*************************verify token***************************** */
  auth.verifyToken = async (req, res, next) => {
    try {
      const authHeader = req.headers["authorization"];
      const token = authHeader && authHeader.split(" ")[1];
      if (token == null) {
        utils.sendResponse(req, res, {}, "Access Denied", 401);
        return;
      }
      req.user = await jwt.verify(token, TOKEN_SECRET);
      next();
    } catch (err) {
      utils.sendResponse(req, res, {}, "INVALID TOKEN", 400);
    }
  };
  return auth;
}