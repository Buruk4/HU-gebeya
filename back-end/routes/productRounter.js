import express from "express";
import upload from "../middleWare/multer.js";
import {
  addProduct,
  listProduct,
  removeProduct,
  singleProduct,
} from "../controllers/producController.js";
import adminAuth from "../middleWare/adminAuth.js";

const productRouter = express.Router();

// Add product route with file upload

productRouter.post(
  "/add",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);

// Other product routes
productRouter.post("/remove", adminAuth, removeProduct);
productRouter.post("/single", singleProduct);
productRouter.get("/list", listProduct);

export default productRouter;
