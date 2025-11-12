import express from "express"
import { createTasks, getAllTasks, getTasksByUser } from "../controller/tasks.controller.js";

const route = express.Router();

route.get("/", getAllTasks)
route.get("/:userId", getTasksByUser)
route.post("/", createTasks)
// route.put("/:id")
// route.delete("/:id")


export default route