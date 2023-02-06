const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mysql = require("mysql");

require("dotenv").config();

const app = express();
const port = 5000; // process.env.PORT

app.listen(port, () => console.log(`listening on port ${port}`));
