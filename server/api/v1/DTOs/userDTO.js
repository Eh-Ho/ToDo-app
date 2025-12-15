const { requireFields } = require("./helpers");

const userUpdateDTO = (reqBody) => {
  requireFields(reqBody, ["name", "email"]);
  const { name, email, password } = reqBody;
  return { name, email, password };
};

const adminCreateDTO = (reqBody) => {
  requireFields(reqBody, ["name", "email", "password", "role"]);
  const { name, email, password, role } = reqBody;
  return { name, email, password, role };
};

const adminUpdateDTO = (reqBody) => {
  requireFields(reqBody, ["name", "email", "role"]);
  const { name, email, password, role } = reqBody;
  return { name, email, password, role };
};

module.exports = {
  userUpdateDTO,
  adminCreateDTO,
  adminUpdateDTO,
};
