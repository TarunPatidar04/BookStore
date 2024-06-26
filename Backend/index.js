import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();
import bookRoute from "./routes/book.route.js";
import userRoute from "./routes/user.route.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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
} catch (error) {
  console.log("mongodb error :", error);
}

// define a route
app.use("/book", bookRoute);
app.use("/book", bookRoute);

//define user route
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
