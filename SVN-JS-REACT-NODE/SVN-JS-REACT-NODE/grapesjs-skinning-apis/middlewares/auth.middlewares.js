import jwt from "jsonwebtoken";
import { JWT_KEY } from "../configs/configs";

export const verifyToken = (req, res, next) => {
  const token = req.body.token || req.headers["x-access-token"];
  if (!token) {
    return res.json({ isSuccess: false, msg: "A token is required for authentication" });
  }

  try {
    const decoded = jwt.verify(token, JWT_KEY);
    req.user = decoded;
  } catch (error) {
    return res.json({ isSuccess: false, msg: "Invalid token" });
  }
  return next();
}