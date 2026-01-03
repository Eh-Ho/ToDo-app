const User = require("../models/userModel");
const Task = require("../models/taskModel");

module.exports = class Service {
  constructor() {
    this.model = { User, Task };
  }
};
