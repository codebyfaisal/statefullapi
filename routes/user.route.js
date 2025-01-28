import express from "express";
import {
  handleUserLogin,
  handleUserSignup,
} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/signup", handleUserSignup);
userRouter.post("/login", handleUserLogin);

export default userRouter;
