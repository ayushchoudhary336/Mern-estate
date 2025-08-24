import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userrouter from "./routes/user.route.js";
import authrouter from "./routes/auth.route.js";
import User from "./models/user.models.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log(
      "Connected to MongoDB successfully!",
      mongoose.connection.db.databaseName
    );
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Server is running on port 3000   .!!!");
});

app.use("/api/user", userrouter);
app.use("/api/auth", authrouter);

//-------------------test route to check all users ------------
app.get("/check-users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ------------------error handling middleware ------------

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
