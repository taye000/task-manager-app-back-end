import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    task: String,
    day: String,
    reminder: Boolean,
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  {
    toJSON: {
      virtuals: true,
      transform(_doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
      versionKey: false,
    },
  }
);

const CreateTask = mongoose.model("createNewTask", taskSchema);

export default CreateTask;
