const express = require("express");
const mongoose = require("mongoose");
const APIRouter = require("./api/v1/routes/index");
const bodyParser = require("body-parser");
const User = require("./api/v1/models/userModel");
const Task = require("./api/v1/models/taskModel");
const List = require("./api/v1/models/listModel");
const { errorHandler } = require("./api/v1/middlewares");

const mongooseUri = process.env.MONGO_URI;

// db models sync
User.syncIndexes().then(() => {
  console.log("User Indexes are now synced!");
});
Task.syncIndexes().then(() => {
  console.log("Task Indexes are now synced!");
});

List.syncIndexes().then(() => {
  console.log("List Indexes are now synced!");
});

// db connection
mongoose
  .connect(mongooseUri)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

// body parser
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use("/api", APIRouter);
app.use(errorHandler);

const port = process.env.SERVER_LISTENING_PORT;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
