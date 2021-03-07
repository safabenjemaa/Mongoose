console.clear();
const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/connectDB");
const app = express();

dbConnect();
//Create route
// middleware routing
app.use(express.json());

app.use("/api/person", require("./routers/persons"));
const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`server is runnig   ${PORT}`)
);
