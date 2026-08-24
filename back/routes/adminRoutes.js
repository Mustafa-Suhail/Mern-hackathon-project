
import express from "express";
import { isAuthenticatedUser } from "../utils/userAuth.js";
import {getAllUsers,getAllManagers,getSingleUser,getSingleManager,deleteUser,deleteManager,getAdminStats,} from "../controllers/adminController.js";
const router = express.Router();

router.get("/users",isAuthenticatedUser, getAllUsers);
router.get("/managers",isAuthenticatedUser, getAllManagers);
router.get("/users/:id",isAuthenticatedUser, getSingleUser);
router.get("/managers/:id",isAuthenticatedUser, getSingleManager);
router.delete("/delete-users/:id",isAuthenticatedUser, deleteUser);
router.delete("/delete-managers/:id",isAuthenticatedUser, deleteManager);
router.get("/admin/stats",isAuthenticatedUser, getAdminStats);

export default router;
