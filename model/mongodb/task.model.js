import mongoose from "mongoose";
const { Schema } = mongoose;

const TaskSchema = new Schema({
  description: { type: String, required: true },
  file: { type: String }, // URL or path to the uploaded file
  grade: { type: mongoose.Schema.Types.ObjectId, ref: 'Grade', required: true }
});

const Task = mongoose.model('Task', TaskSchema);
export default Task;