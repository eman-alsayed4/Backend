import mongoose from "mongoose";
import Grade from './model/mongodb/grade.model.js'; 
import env from "dotenv";
env.config();



mongoose.connect((process.env.MONGODB_CON_STR + "bizdb") , { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error: ", err));

const createGrades = async () => {
  const grades = [1, 2, 3, 4, 5, 6].map(grade => ({ grade, subjects: [] }));

  try {
    await Grade.insertMany(grades);
    console.log("Grades added successfully");
  } catch (error) {
    console.error("Error adding grades:", error);
  } finally {
    mongoose.connection.close();
  }
};

createGrades();
