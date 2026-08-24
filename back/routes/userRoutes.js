import express from "express";
import { deleteProfileController, loginUserController, logoutUser, registerUserController, resetPasswordController, updateProfileController, userProfileController, updatePasswordController, getUserByIdController, deleteProfileByIdController, forgotPasswordController } from "../controllers/userController.js";
import { isAdmin, isAuthenticatedUser } from "../utils/userAuth.js";
const userRouter = express.Router();

userRouter.post("/register-user", registerUserController);
userRouter.post("/login-user", loginUserController)
userRouter.get("/user-profile/:id", isAuthenticatedUser, userProfileController)
userRouter.get("/admin-user-profile/:id", isAuthenticatedUser, isAdmin("admin"), getUserByIdController)
userRouter.put("/update-profile", isAuthenticatedUser, updateProfileController)
userRouter.delete("/delete-profile", isAuthenticatedUser, deleteProfileController)
userRouter.delete("/delete-profile/:id", isAuthenticatedUser, isAdmin("admin"), deleteProfileByIdController)
userRouter.post("/logout-user", isAuthenticatedUser, logoutUser)
userRouter.post("/forgot-password", forgotPasswordController)
userRouter.post("/reset-password/:token", resetPasswordController)
userRouter.put("/update-password", isAuthenticatedUser, updatePasswordController)

export default userRouter


    