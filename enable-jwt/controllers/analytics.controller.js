import URL from "../model/url.model.js";

const handleGetAllAnalytics = async (req, res) => {
  const analytics = await URL.find({});
  return res.json(analytics);
};

const handleGetOneAnalytic = async (req, res) => {
  const { shortId, redirectUrl, visitHistory, createdAt } = await URL.findOne({
    shortId: req.params.shortId,
  });
  return res.json({
    shortId,
    redirectUrl,
    visitHistory,
    createdAt,
  });
};

export { handleGetAllAnalytics, handleGetOneAnalytic };
