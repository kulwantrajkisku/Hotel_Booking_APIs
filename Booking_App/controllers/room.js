import Room from "../models/Room";
import Hotel from "../models/Hotel"

const createRoom = async (req, res, next) => {

    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body);
    try {
        const savedRoom = await newRoom.save();

        try {
            await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: savedRoom._id } });
        } catch (error) {
            next(error)
        }
        res.status(200).json(savedRoom)
    } catch (error) {
        next(error)
    }
}

const updateRoom = async (req, res, next) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true });
        res.status(200).json(updatedRoom)
    } catch (error) {
        next(error)
    }
}

const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    try {
        await Room.findByIdAndDelete(req.params.id);
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: { rooms: req.params.id }
            });

        } catch (error) {
            next(error)
        }
        res.status(200).json("Room has been deleted")
    } catch (error) {
        next(error)
    }
}

const getByIdRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id);

        res.status(200).json(room)
    } catch (error) {
        next(error)
    }
}

const getAllRoom = async (req, res, next) => {
    try {
        const room = await Room.find()
        res.status(200).json(room)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createRoom,
    updateRoom,
    deleteRoom,
    getByIdRoom,
    getAllRoom
}