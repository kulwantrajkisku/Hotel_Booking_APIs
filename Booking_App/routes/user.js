import express from "express";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken";
import { updateUser, deleteUser, getAllUser, getByIdUser } from "../controllers/user";

const router = express.Router()

// Update
router.put("/:id", verifyUser, updateUser)

// Delete
router.delete("/:id", verifyUser, deleteUser)

// Get by id
router.get("/:id", verifyUser, getByIdUser)

// Get All
router.get("/", verifyAdmin, getAllUser)

export default router

