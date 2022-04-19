//defines the shape of documents i.e stored inside a db
module.exports = (mongoose) => {
  const userschema = new mongoose.Schema({
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    userName: {
      type: String,
      unique: true,
    },
    age: {
      type: Number
    },
    phone: {
      type: String,
      unique: true,
      default: '0'
    },
    email: {
      type: String,
      unique: true,
    }
  });
  require("./index")(userschema, mongoose);
  return mongoose.model("Users", userschema);
}