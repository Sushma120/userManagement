//defines the methods post, put , get, delete
module.exports = (app, mongoose, express) => {
  const router = express.Router();

  app.use("/api/v1/userManagement", router);
}