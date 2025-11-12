import express from "express"
import { createTasks, getAllTasks, getTasksByUser } from "../controller/tasks.controller.js";

const route = express.Router();

route.get("/tasks", getAllTasks)
route.get("/tasks/user/:userId", getTasksByUser)
route.post("/tasks", createTasks)
// route.put("/:id")
// route.delete("/:id")


export default route