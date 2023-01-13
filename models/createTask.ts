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

const CreateTask = mongoose.model("createTask", taskSchema);

export default CreateTask;
