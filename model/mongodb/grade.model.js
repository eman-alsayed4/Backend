import mongoose from "mongoose";
const { Schema } = mongoose;

const GradeSchema = new Schema({
  grade: { type: Number, required: true, unique: true },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }] 
});

const Grade = mongoose.model('Grade', GradeSchema);
export default Grade;
