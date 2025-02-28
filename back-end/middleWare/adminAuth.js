import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.json({
        success: false,
        message: "Authorization token not provided",
      });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the decoded token contains the correct admin information
    if (decodedToken.email !== process.env.ADMIN_EMAIL) {
      return res.json({
        success: false,
        message: "Not authorized.",
      });
    }

    next();
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

export default adminAuth;
