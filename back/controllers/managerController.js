import User from "../models/userModel.js";
// import Assignment from "../models/assignmentModel.js";
// import ChildRequest from "../models/childRequestModel.js";

import Manager from "../models/managerModel.js";
import crypto from "crypto";
import { sendToken } from "../utils/jwtToken.js";
import { sendEmail } from "../utils/sendEmail.js";

export const registerManagerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const manager = await Manager.create({
      name,
      email,
      password,
      avatar: {
        public_id: "1",
        url: "default_avatar_url",
      },
    });
    if (!manager) {
      return res.status(400).json({ success: false, message: "Manager not created" });
    }
    sendToken(manager, 200, res);
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

export const loginManagerController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password required" });
    }

    const manager = await Manager.findOne({ email }).select("+password");
    if (!manager || !(await manager.comparePassword(password))) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }

    // ✅ send JWT token in cookie
    sendToken(manager, 200, res);
  } catch (error) {
    res.status(500).json({ success: false, message: "Login error" });
  }
};

export const managerProfileController = async (req, res) => {
  try {
    return res.status(200).json({ success: true, manager: req.manager });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

export const getManagerByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const manager = await Manager.findById(id).select("-password");
    if (!manager) {
      return res.status(404).json({ success: false, message: "Manager not found" });
    }
    return res.status(200).json({ success: true, manager });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

export const updateManagerProfileController = async (req, res) => {
  try {
    const manager = await Manager.findByIdAndUpdate(req.manager._id, req.body, {
      new: true,
      runValidators: true,
    });
    return res.status(200).json({ success: true, manager });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

export const deleteManagerProfileController = async (req, res) => {
  try {
    const manager = await Manager.findByIdAndDelete(req.manager._id);
    return res.status(200).json({ success: true, message: "Manager deleted successfully", manager });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

export const deleteManagerByIdController = async (req, res) => {
  try {
    const manager = await Manager.findByIdAndDelete(req.params.id);
    if (!manager) {
      return res.status(400).json({ success: false, message: "Manager not found" });
    }
    return res.status(200).json({ success: true, message: "Manager deleted successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

export const logoutManager = async (req, res) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
    res.status(200).json({ success: true, message: "Manager logged out successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

export const forgotManagerPasswordController = async (req, res) => {
  try {
    const { email } = req.body;
    const manager = await Manager.findOne({ email });
    if (!manager) {
      return res.status(400).json({ success: false, message: "Manager not found" });
    }
    const resetToken = manager.getResetPasswordToken();
    await manager.save({ validateBeforeSave: false });
    const resetPasswordUrl = `http://localhost:5173/reset-password/${resetToken}`;
    const message = `Reset your password using this link:\n\n${resetPasswordUrl}`;
    await sendEmail({ email: manager.email, subject: "Forgot Password", message });
    res.status(200).json({ success: true, message: `Reset link sent to ${manager.email}` });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error sending reset email", error: error.message });
  }
};

export const resetManagerPasswordController = async (req, res) => {
  try {
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");
    const manager = await Manager.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });
    if (!manager) {
      return res.status(400).json({ success: false, message: "Token invalid or expired" });
    }
    const { password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ success: false, message: "Passwords do not match" });
    }
    manager.password = password;
    manager.resetPasswordToken = undefined;
    manager.resetPasswordExpire = undefined;
    await manager.save();
    sendToken(manager, 200, res);
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

export const updateManagerPasswordController = async (req, res) => {
  try {
    const { oldPassword, newPassword, confirmNewPassword } = req.body;
    const manager = await Manager.findById(req.manager.id).select("+password");
    const isPasswordMatched = await manager.comparePassword(oldPassword);
    if (!isPasswordMatched) {
      return res.status(400).json({ success: false, message: "Old password incorrect" });
    }
    if (newPassword !== confirmNewPassword) {
      return res.status(400).json({ success: false, message: "Passwords do not match" });
    }
    manager.password = newPassword;
    await manager.save();
    sendToken(manager, 200, res);
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};



export const getAllManagers = async (req, res) => {
  try {
    const managers = await User.find({ role: "manager" });
    res.status(200).json({ success: true, managers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const createAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.create(req.body);
    res.status(201).json({ success: true, assignment });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment) {
      return res.status(404).json({ success: false, message: "Assignment not found" });
    }
    await assignment.deleteOne();
    res.status(200).json({ success: true, message: "Assignment deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const acceptChildRequest = async (req, res) => {
  try {
    const request = await ChildRequest.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ success: false, message: "Request not found" });
    }
    request.status = "accepted";
    await request.save();
    res.status(200).json({ success: true, message: "Child request accepted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};








