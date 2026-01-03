const { requireFields } = require("./helpers");

const createDTO = (reqBody) => {
  requireFields(reqBody, ["title", "description"]);
  const { title, description } = reqBody;
  return { title, description };
};

const updateDTO = (reqBody) => {
  requireFields(reqBody, ["title", "description", "completed"]);
  const { title, description, completed } = reqBody;
  return { title, description, completed };
};

module.exports = { createDTO, updateDTO };
