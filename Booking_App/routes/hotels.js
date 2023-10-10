import express from "express";
import { verifyAdmin } from "../utils/verifyToken";
import { createHotel, updateHotel, deleteHotel, getByIdHotel, getAllHotel } from "../controllers/hotel";

const router = express.Router();

// Create 
router.post("/", verifyAdmin, createHotel)

// Update
router.put("/find/:id", verifyAdmin, updateHotel)

// Delete
router.delete("/find/:id", verifyAdmin, deleteHotel)

//Get By Id
router.get("/find/:id", getByIdHotel)

// Get All Hotels
router.get("/", getAllHotel)

export default router