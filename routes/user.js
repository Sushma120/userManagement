//defines the methods post, put , get, delete
module.exports = (app, mongoose, express) => {
  const router = express.Router();
  const controller = require("../controller/user")(app, mongoose);
  const validator = require("../validator/validator")();

  router.post("/addUser", validator.addUser, controller.addUser);
  router.get("/getAllUsers", controller.getAllUsers);
  router.get("/getById/:_id", controller.getUserById);
  router.put("/update/:_id", validator.updateUser,controller.updateData);
  router.delete("/delete/:_id", controller.deleteData);

  app.use("/api/v1/userManagement", router);
}