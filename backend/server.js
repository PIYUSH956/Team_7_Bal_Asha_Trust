const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
require("dotenv").config();
const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json({limit:"2mb"}));
app.use(cors());

fs.readdirSync('./routes').map((r)=> app.use("/api",require('./routes/' + r)));

mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));


  
const port = process.env.PORT || 8000;
const server = app.listen(port,()=> console.log(`server is running ${port}`));







