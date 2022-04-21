// this is the entry point of the app
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from './config/mongodb.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './api/swagger.json'
import loader from './config/loader.js'
dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

loader(app, mongoose, dotenv, express);

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
  console.log(` app listening on port ${port}!`);
});
