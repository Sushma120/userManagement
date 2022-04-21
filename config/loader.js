import fs from 'fs';

const loader = (app, mongoose, dotenv, express) => {
  const root = require("path").normalize(__dirname + "/..");
  const modelPath = root + "/models";
  const routePath = root + "/routes";

  fs.readdirSync(modelPath).forEach(function (file) {
    console.log("Loading Model:" + file);
    require(modelPath + "/" + file + "/schema.js")(mongoose);
  });

  fs.readdirSync(routePath).forEach(function (file) {
    console.log("Loading Router: " + file);
    require(routePath + "/" + file)(app, mongoose, express);
  });
}
export default loader;