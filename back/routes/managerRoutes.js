import express from "express";
import { isAuthenticatedUser } from "../utils/managerAuth.js";
import {registerManagerController,loginManagerController,managerProfileController,getManagerByIdController,updateManagerProfileController,deleteManagerProfileController,deleteManagerByIdController,logoutManager,forgotManagerPasswordController,resetManagerPasswordController,updateManagerPasswordController,} from "../controllers/managerController.js";

const router = express.Router();

router.post("/register", registerManagerController);
router.post("/login",isAuthenticatedUser, loginManagerController);
router.get("/profile", managerProfileController);
router.get("/manager/:id", getManagerByIdController);
router.put("/update/profile", updateManagerProfileController);
router.delete("/delete/profile",isAuthenticatedUser, deleteManagerProfileController);
router.delete("/delete/:id", deleteManagerByIdController);
router.post("/logout", logoutManager);

router.post("/forgot-password", forgotManagerPasswordController);
router.put("/reset-password/:token", resetManagerPasswordController);
router.put("/update-password", updateManagerPasswordController);



export default router;
