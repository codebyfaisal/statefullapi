import URL from "../model/url.model.js";
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateShortId(length) {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result.trim();
}

const handleGenerateShortUrl = async (req, res) => {
  const { url, user } = req.body;
  if (!url) return res.status(400).json({ message: "Please provide a url" });
  const shortId = generateShortId(8);

  await URL.create({
    shortId,
    redirectUrl: url,
    visitHistory: [],
    createdBy: user._id,
  });

  // return res.json({ id: shortId });
  return res.redirect("/");
};

export default handleGenerateShortUrl;
