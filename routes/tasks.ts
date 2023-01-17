import express from "express";
import { getTasks, getTaskbyId, createTask } from "../controllers/tasks";

const router = express.Router();

router.get("/", getTasks);
router.get("/:id", getTaskbyId);
router.post("/create", createTask);

export default router;
