import express from "express";
import URL from "../model/url.model.js";

const handleRedirect = async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
          ip: req.ip,
        },
      },
    }
  );

  if (!entry)
    return res.status(200).json({ message: "The link is expire or not exist" });

  return res.redirect(entry.redirectUrl);
};

export default handleRedirect;
