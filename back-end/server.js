import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRounter.js";
import cartRouter from "./routes/cartRoute.js";

// app config

const app = express();
const port = process.env.PORT || 4000;

connectDb();
connectCloudinary();

// MIDDLEWARE

app.use(express.json());
app.use(cors());

// api end point

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`server started on: ${port}`);
});
