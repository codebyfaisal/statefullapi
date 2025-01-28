import express from "express";
import connectMongoDB from "./connect.js";
import "dotenv/config";
import path from "path";
import urlRrouter from "./routes/url.route.js";
import handleRedirect from "./controllers/redirect.controller.js";
import userRouter from "./routes/user.route.js";
import staticRrouter from "./routes/static.route.js";
import cookieParser from "cookie-parser";
import { authUser, restrictToLoginUser } from "./middleware/auth.middleware.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

connectMongoDB()
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// View Routes
app.use("/", authUser, staticRrouter);

// User Routes
app.use("/user", userRouter);

// URL Routes
app.use("/url", restrictToLoginUser, urlRrouter);
app.use("/analytics", urlRrouter);
app.use("/:shortId", handleRedirect);

app.listen(port, () => {
  console.log("Server is running on localhost:" + port);
});
