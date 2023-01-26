const express = require("express");
const router = express.Router();

const {
  getAllNews,
  getOneNews,
  createNews,
  updateNews,
  deleteNews,
} = require("../controllers/news.js");

router.route("/").get(getAllNews).post(createNews);
router.route("/:id").get(getOneNews).patch(updateNews).delete(deleteNews);

/*router.get("/", (req, res) => {
  res.send("Get News");
});*/

module.exports = router;
