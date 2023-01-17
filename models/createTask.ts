import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  task: String,
  day: String,
  reminder: Boolean,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const CreateTask = mongoose.model("createNewTask", taskSchema);

export default CreateTask;
