const { requireFields } = require("./helpers");

const createDTO = (reqBody) => {
  requireFields(reqBody, ["title"]);

  const { title, description, dueDate, tags, listId } = reqBody;
  return { title, description, dueDate, tags, listId };
};

const updateDTO = (reqBody) => {
  requireFields(reqBody, ["title", "completed"]);

  const { title, description, completed, dueDate, tags, listId } = reqBody;

  return {
    title,
    description,
    completed,
    dueDate,
    tags,
    listId,
  };
};

module.exports = { createDTO, updateDTO };
