const News = require("../models/News.js");

const getAllNews = (req, res) => {
  console.log("getAllNews");

  res.send("getAllNews");
};

const createNews = async (req, res) => {
  console.log("createNews");

  try {
    const news = await News.create(req.body);
    console.log("Siker");
    res.status(201).json({ news });
  } catch (error) {
    console.log("Hiba!", error);
    res.status(500).json({ msg: error });
  }
};

const getOneNews = (req, res) => {
  console.log("getOneNews");

  res.json({ id: req.params.id });
};

const updateNews = (req, res) => {
  console.log("updateNews");

  res.send("updateNews");
};

const deleteNews = (req, res) => {
  console.log("deleteNews");

  res.send("deleteNews");
};

module.exports = { getAllNews, getOneNews, createNews, updateNews, deleteNews };
