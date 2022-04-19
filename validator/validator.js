// there is a library used to do these valdations called joi 
// it should validate the payload

const Joi = require('joi');
const utils = require('../utils/util')();

module.exports = () => {
  let validator = {};

  /**************************data validation for add User api**************************** */
  validator.addUser = async (req, res, next) => {
    const user = Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      userName: Joi.string().required(),
      age: Joi.number().required(),
      phone: Joi.string().length(10).pattern(/^[0-9]+$/).required().
        messages({ 'string.pattern.base': "Phone number must be numbers", 'string.length': 'phone number length must be 10 characters long' }),
      email: Joi.string().email().min(5).max(50).required()
    });
    const { error, value } = user.validate(req.body);
    if (error) {
      res.status(422).json({
        status: "Inavlid data",
        message: error.message,
      });
    } else {
      req.body = value;
      next();
    }
  }
  /**************************data validation for update User api**************************** */
  validator.updateUser = async (req, res, next) => {
    const data = Joi.object({
      firstName: Joi.string().optional(),
      lastName: Joi.string().optional(),
      userName: Joi.string().optional(),
      age: Joi.number().optional(),
      phone: Joi.string().length(10).pattern(/^[0-9]+$/).optional().
        messages({ 'string.pattern.base': "Phone number must be numbers", 'string.length': 'phone number length must be 10 characters long' }),
      email: Joi.string().email().min(5).max(50)
    });
    const { error, value } = data.validate(req.body);
    if (error) {
      res.status(422).json({
        status: "Inavlid data",
        message: error.message,
      });
    } else {
      req.body = value;
      next();
    }
  }
  return validator;
}

