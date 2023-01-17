import CreateTask from "../models/createTask";

//fetch tasks
export const getTasks = async (req: any, res: any) => {
  try {
    const allTasks = await CreateTask.find();
    res.status(200).json({});
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};

//create a new task
export const createTask = async (req: any, res: any) => {
  const {task, day, reminder} = req.body;
  console.log(task);

  try {
    const newTask = await CreateTask.create({
        task: req.body.task,
        day: req.body.day,
        reminder: req.body.reminder,
    });
    let createdTask = await newTask.save();
    res.status(201).json(createdTask);
    console.log(createdTask);
  } catch (error: any) {
    res.status(409).json({ error: error.message });
  }
};
