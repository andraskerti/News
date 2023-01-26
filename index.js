const express = require("express");
const app = express();
const newsRouter = require("./routes/news.js"); // router importálása és relatív utvonal meghatározás
const connectDB = require("./db/connect.js");
require("dotenv").config();

app.set("view engine", "ejs");

// middleware
app.use(express.json());

// routes
app.use("/api/v1/news", newsRouter);

const port = process.env.PORT || 8080;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is lisening on ${port} port...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
