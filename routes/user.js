//defines the methods post, put , get, delete
"use strict";

module.exports = (app, mongoose, express, upload) => {
  const router = express.Router();
  
  app.use("/api/v1/userManagement", router);
}