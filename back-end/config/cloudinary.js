import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Ensure this matches your .env file
      api_key: process.env.CLOUDINARY_API_KEY, // Fixed typo: "CLOUDNINARY"
      api_secret: process.env.CLOUDINARY_API_SECRET, // Fixed typo: "CLOUDNINARY"
    });
    console.log("Cloudinary connected successfully"); // Optional success log
  } catch (error) {
    console.error("Failed to configure Cloudinary:", error.message);
    throw new Error("Cloudinary configuration error");
  }
};

export default connectCloudinary;
