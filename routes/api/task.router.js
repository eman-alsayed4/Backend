import express from 'express';
import multer from 'multer';
import Grade from '../../model/mongodb/grade.model.js';
import Task from '../../model/mongodb/task.model.js';

const taskRouter = express.Router();

// Setup multer for file uploads
const upload = multer({ dest: 'uploads/' });

taskRouter.get('/:grade/tasks', async (req, res) => {
  try {
    const grade = await Grade.findOne({ grade: req.params.grade }).populate('tasks');
    if (!grade) {
      return res.status(404).json({ message: 'Grade not found' });
    }
    res.json(grade.tasks);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

taskRouter.post('/:grade/tasks', upload.single('file'), async (req, res) => {
  try {
    const gradeDoc = await Grade.findOne({ grade: req.params.grade });
    if (!gradeDoc) {
      return res.status(404).json({ message: 'Grade not found' });
    }

    const newTask = new Task({
      description: req.body.description,
      file: req.file ? req.file.path : null,
      grade: gradeDoc._id
    });

    const savedTask = await newTask.save();
    gradeDoc.tasks.push(savedTask._id);
    await gradeDoc.save();

    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default taskRouter;
