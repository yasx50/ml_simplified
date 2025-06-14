import dotenv from "dotenv";
dotenv.config({
    path: './.env' // ensure the dot is present unless you have a custom filename
});

import express from 'express';
import cors from 'cors';

import { connectDB } from './database/Database_Connection.js';
import sequelize from './database/Database_Connection.js'; // ✅ make sure this exports sequelize
import User from './models/User.js'; // ✅ import all models BEFORE sync to ensure they register

const app = express();

app.use(express.json());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

import StudentRouter from './apis/Students_Routes.js';
app.use("/api/v1", StudentRouter);

connectDB()
  .then(async () => {
    console.log("✅ Database connected successfully!");

    // Sync Sequelize models
    await sequelize.sync({ alter: true }); // ✅ creates or updates tables without dropping

    app.listen(process.env.PORT || 3000, () => {
      console.log("🚀 Server is listening at port", process.env.PORT || 3000);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err);
  });
