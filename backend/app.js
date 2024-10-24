const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/user.route");
const errorMiddleware = require("./middlewares/error.middleware");
const fileUpload = require("express-fileupload");
const adminRoute = require("./routes/admin.route");

const app = express();

dotenv.config();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({}));
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.use(express.static("static"));
app.use(cookieParser({}));

// Routes
app.use("/api/admin", adminRoute);
app.use("/api/auth", userRoute);

// error middleware

app.use(errorMiddleware);

const startApp = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    app.listen(process.env.PORT, () => {
      console.log(`Server started on port ${process.env.PORT}`);
      console.log("MongoDB connected");
    });
  } catch (error) {
    console.log("MongoDB error: ", error);
  }
};

startApp();
