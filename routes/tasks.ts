import express from "express";
import { getTasks, getTaskbyId, createTask, updateTask, deleteTask } from "../controllers/tasks";

const router = express.Router();

router.get("/", getTasks);
router.get("/:id", getTaskbyId);
router.post("/create", createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
