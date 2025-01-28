import express from "express";
import URL from "../model/url.model.js";

const staticRrouter = express.Router();

staticRrouter
  .get("/", async (req, res) => {
    let urls = [];
    let user = {};
    if (req.body.user) {
      const userId = req.body.user.id.toString();
      urls = await URL.find({ createdBy: userId });
      user = req.body.user.name
    }

    return res.render("home", { urls, user });
  })
  .get("/signup", (req, res) => {
    return res.render("signup");
  })
  .get("/login", (req, res) => {
    return res.render("login");
  });

export default staticRrouter;
