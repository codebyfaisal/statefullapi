import jwt from "jsonwebtoken";
import "dotenv/config";

const setUser = (id, email, password) => {
  const token = jwt.sign({ id, email, password }, process.env.JWT_SECRET);
  return token;
};

const getUser = (token) => {
  if (!token) return null;
  const user = jwt.verify(token, process.env.JWT_SECRET);
  return user;
};

export { setUser, getUser };
