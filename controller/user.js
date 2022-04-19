
module.exports = (app, mongoose) => {
  const User = mongoose.model("Users");
  const utils = require("../utils/util")();
  const userController = {};

  /*************************Add user***************************** */
  userController.addUser = async (req, res) => {
    try {
      const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        userName: req.body.userName,
        email: req.body.email,
        phone: req.body.phone
      }
      const find = { email: data.email };
      const user = await User.findUser(find);//check if user already exists
      if (user) {
        utils.sendResponse(req, res, {}, "User already exists", 409);
      }
      else {
        const userData = await User.addUser(data);
        utils.sendResponse(req, res, userData, "User added successfully", 201);
      }
    } catch (error) {
      utils.sendResponse(req, res, {}, error.message, 400);
    }
  }
  /*************************Get all users******************************/
  userController.getAllUsers = async (req, res) => {
    try {
      const allUsers = await User.findUsers();
      utils.sendResponse(req, res, allUsers, "All users", 200);
    } catch (error) {
      utils.sendResponse(req, res, {}, error.message, 400);
    }
  }
  /*************************Get user by id******************************/
  userController.getUserById = async (req, res) => {
    try {
      const id = { _id: req.params._id };
      const user = await User.findUser(id);//check if user exists or not
      if(user){
        utils.sendResponse(req, res, user, "user", 200);
      }
      else throw new Error("no user found");
    
    } catch (error) {
      utils.sendResponse(req, res, {}, error.message, 400);
    }
  }
  /*************************Update user by id******************************/
  userController.updateData = async (req, res) => {
    try {
      const id = { _id: req.params._id };
      const data = req.body;
      const checkUser = await User.findUser(id);//check if user exists or not
      if (checkUser) {
        const user = await User.updateUser(id, data);
        utils.sendResponse(req, res, user, "updated successfully", 200);
      }
      else throw new Error("no user found");
    } catch (error) {
      utils.sendResponse(req, res, {}, error.message, 400);
    }
  }
  /*************************delete user by id******************************/
  userController.deleteData = async (req, res) => {
    try {
      const id = { _id: req.params._id };
      const checkUser = await User.findUser(id);//check if user exists or not
      if (checkUser) {
        const user = await User.deleteUser(id);
        utils.sendResponse(req, res, {}, "deleted successfully", 200);
      }
      else throw new Error("no user found");
    } catch (error) {
      utils.sendResponse(req, res, {}, error.message, 400);
    }
  }
  return userController;
}