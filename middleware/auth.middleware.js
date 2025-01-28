import { getUser } from "../service/auth.js";

const restrictToLoginUser = (req, res, next) => {
  try {
    const userUId = req.cookies.uid;
    if (!userUId) return res.redirect("/login");
    const user = getUser(userUId);
    if (!user) return res.redirect("/login");
    req.body.user = user;
  } catch (err) {}
  next();
};

const authUser = async (req, res, next) => {
  try {
    const userUId = req.cookies.uid;
    const user = getUser(userUId);
    req.body.user = user;
  } catch (err) {}
  next();
};

export { restrictToLoginUser, authUser };
