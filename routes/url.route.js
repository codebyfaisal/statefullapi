import express from "express";
import handleGenerateShortUrl from "../controllers/url.controller.js";
import {
  handleGetAllAnalytics,
  handleGetOneAnalytic,
} from "../controllers/analytics.controller.js";
import URL from "../model/url.model.js";

const urlRrouter = express.Router();

urlRrouter
  .post("/", handleGenerateShortUrl)
  .get("/", handleGetAllAnalytics)
  .get("/:shortId", handleGetOneAnalytic)
  .post("/delete", async (req, res) => {
    const shortId = req.body.shortId;
    await URL.deleteOne({ shortId });
    res.redirect("/");
  })
  .post("/delete/all", async (req, res) => {
    await URL.deleteMany({});
    res.redirect("/");
  });

export default urlRrouter;
