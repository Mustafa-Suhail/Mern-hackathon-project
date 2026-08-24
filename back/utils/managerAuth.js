import jwt from "jsonwebtoken";
import Manager from "../models/managerModel.js";

export const isAuthenticatedUser= async (req, res, next) => {
  try {
    const token = req.cookies.token || req.header("Authorization")?.replace("Bearer ", "");
    if (!token) return res.status(401).json({ success: false, message: "Not authenticated" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const manager = await Manager.findById(decoded.id);
    if (!manager) return res.status(401).json({ success: false, message: "Manager not found" });

    req.manager = manager;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};
