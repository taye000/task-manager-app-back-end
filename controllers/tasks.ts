import CreateTask from "../models/createTask";

//fetch tasks
export const getTasks = async (req: any, res: any) => {
  try {
    const allTasks = await CreateTask.find();
    res.status(200).json({"tasks":["task1"]});
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};

//create a new task
export const createTask = async (req: any, res: any) => {
  const task = req.body;
  const newTask = new CreateTask(task);
  try {
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error: any) {
    res.status(409).json({ error: error.message });
  }
};
