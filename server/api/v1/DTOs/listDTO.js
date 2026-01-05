const { requireFields } = require("./helpers");

const createDTO = (reqBody) => {
  requireFields(reqBody, ["title", "icon", "color"]);
  const { title, icon, color } = reqBody;
  return { title, icon, color };
};

const updateDTO = (reqBody) => {
  requireFields(reqBody, ["title", "icon", "color"]);
  const { title, icon, color } = reqBody;
  return { title, icon, color };
};

module.exports = {
  createDTO,
  updateDTO,
};
