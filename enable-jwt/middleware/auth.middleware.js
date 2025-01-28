import { getUser } from "../service/auth.js";

const restrictToLoginUser = (req, res, next) => {
  try {
    const userToken = req.cookies.token;
    if (!userToken) return res.redirect("/login");
    const user = getUser(userToken);
    if (!user) return res.redirect("/login");
    req.body.user = user;
  } catch (err) {}
  next();
};

const authUser = async (req, res, next) => {
  try {
    const userToken = req.cookies.token;
    const user = getUser(userToken);
    req.body.user = user;
  } catch (err) {}
  next();
};

export { restrictToLoginUser, authUser };
