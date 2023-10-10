import express from "express";
import { createRoom, updateRoom, deleteRoom, getAllRoom, getByIdRoom } from "../controllers/room";

import { verifyAdmin } from "../utils/verifyToken";

const router = express.Router();

// Create Room
router.post("/:hotelId", verifyAdmin, createRoom)

// UpdateRoom
router.put("/:id", verifyAdmin, updateRoom);

// Delete Room
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);

// Get by Id
router.get("/:id", getByIdRoom)

// Get all
router.get("/", getAllRoom)

export default router