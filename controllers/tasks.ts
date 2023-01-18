import CreateTask from "../models/createTask";
import validator from "validator";

//fetch tasks
export const getTasks = async (req: any, res: any) => {
  try {
    const allTasks = await CreateTask.find();
    res.status(200).json({ allTasks });
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};

//fetch task by id
export const getTaskbyId = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const taskById = await CreateTask.findById(id);
    res.status(200).json({ taskById });
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};

//create a new task
export const createTask = async (req: any, res: any) => {
  const task = req.body.text;
  const day = req.body.day;
  const reminder = req.body.reminder;
  if (validator.isEmpty(task)) {
    return res.status(400).json({ task: "task is required" });
  }
  if (validator.isEmpty(day)) {
    return res.status(400).json({ day: "day is required" });
  }

  try {
    const newTask = await CreateTask.create({ task, day, reminder });
    let createdTask = await newTask.save();
    res.status(201).json(createdTask);
    console.log(createdTask);
  } catch (error: any) {
    res.status(409).json({ error: error.message });
  }
};

//update task by id
export const updateTask = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const { task, day, reminder } = req.body;
    const taskById: any = await CreateTask.findByIdAndUpdate(id);
    if (task) taskById.task = task;
    if (day) taskById.day = day;
    if (reminder) taskById.reminder = reminder;
    taskById.save();
    res.status(200).json({ taskById });
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};

//delete task by id
export const deleteTask = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    await CreateTask.findByIdAndDelete(id);
    const allTasks = await CreateTask.find();
    res.status(200).json({ allTasks });
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};
