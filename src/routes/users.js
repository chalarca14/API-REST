import express from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controller/users.controller.js";

const route = express.Router();

route.get("/", getAllUsers)
route.get("/:id", getUserById)
route.post("/", createUser)
route.put("/:id", updateUser)
route.delete("/:id", deleteUser)


export default route;

