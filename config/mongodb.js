//the method to create the mongodb instance with the local url
import mongoose from 'mongoose';
import config from './config.js';
import dotenv from 'dotenv';
dotenv.config();
const {
  db: { host, port, name },
} = config;
const dbLink = `mongodb://${host}:${port}/${name}`;

mongoose.Promise = global.Promise;
mongoose.connect(dbLink, {});
let db = mongoose.connection;
db.once("open", function callback() {
  console.log("Database connection to MongoDB opened.");
});
db.on("connected", function () {
  console.info("MongoDB event connected");
});
db.on("disconnected", function () {
  console.warn("MongoDB event disconnected");
});
db.on("reconnected", function () {
  console.info("MongoDB event reconnected");
});
db.on("error", function (err) {
  console.error("connection error:" + err);
});
console.log("Loading MongoDB Settings ...");

export default mongoose;