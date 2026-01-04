const User = require("../models/userModel");
const Task = require("../models/taskModel");
const List = require("../models/listModel");
module.exports = class Service {
  constructor() {
    this.model = { User, Task, List };
  }
};
