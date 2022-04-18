// this is the entry point of the app
const express=require("express");
const bodyParser=require("body-parser");
const dotenv = require("dotenv").config();
const mongoose = require("./config/mongodb");
const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./api/swagger.json");

const port = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./config/loader")(app, mongoose, dotenv, express);

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
  console.log(` app listening on port ${port}!`);
});
