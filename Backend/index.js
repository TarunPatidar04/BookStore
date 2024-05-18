import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGOBD_URL;

// connect to mongodb server
try {
  mongoose
    .connect(URI)
    .then(() => {
      console.log("Connected to mongodb server");
    })
    .catch((error) => {
      console.log(error.message);
    });
} catch (error) {}
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
