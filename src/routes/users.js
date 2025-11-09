import express from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controller/users.controller.js";

const route = express.Router();

route.get("/users", getAllUsers)
route.get("/users/:id", getUserById)
route.post("/users", createUser)
route.put("/:id", updateUser)
route.delete("/:id", deleteUser)


export default route;