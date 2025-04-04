import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
      api_key: process.env.CLOUDINARY_API_KEY, 
      api_secret: process.env.CLOUDINARY_API_SECRET, 
    });
    console.log("Cloudinary connected successfully"); 
  } catch (error) {
    console.error("Failed to configure Cloudinary:", error.message);
    throw new Error("Cloudinary configuration error");
  }
};

export default connectCloudinary;
