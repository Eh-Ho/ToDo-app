const express = require("express");
const mongoose = require("mongoose");
const APIRouter = require("./api/v1/routes/index");
const bodyParser = require("body-parser");
const User = require("./api/v1/models/userModel");
const Todo = require("./api/v1/models/todoModel");
const { errorHandler } = require("./api/v1/middlewares");
const cors = require("cors");
const mongooseUri = process.env.MONGO_URI;

// db models sync
User.syncIndexes().then(() => {
  console.log("User Indexes are now synced!");
});
Todo.syncIndexes().then(() => {
  console.log("Todo Indexes are now synced!");
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

//dev front-end running on port 5173
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// body parser
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use("/api", APIRouter);
app.use(errorHandler);

const port = process.env.SERVER_LISTENING_PORT;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
