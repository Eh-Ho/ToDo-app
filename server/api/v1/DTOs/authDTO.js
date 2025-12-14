const loginDTO = (reqBody) => {
  const { email, password } = reqBody;
  return { email, password };
};
const signUpDTO = (reqBody) => {
  const { email, password, name } = reqBody;
  return { email, password, name, role: "user" };
};

module.exports = { loginDTO, signUpDTO };
