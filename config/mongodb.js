//the method to create the mongodb instance with the local url.
"use strict";
const mongoose = require('mongoose');
const config = require("./config");
require("dotenv").config();
const {
  db: { host, port, name },
} = config;
const dbLink = `mongodb://${host}:${port}/${name}`;

mongoose.connect(dbLink, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});