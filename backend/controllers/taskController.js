const Task = require('../models/Task');
const createTask = async (req, res) => {
  try {
    const { title } = req.body;
    const userId = req.user.id; 
    const task = new Task({
      title,
      user: userId,
    });
    const createdTask = await task.save();
    res.status(201).json(createdTask); 

  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.status(200).json(tasks);

  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
const updateTask = async (req, res) => {
  try {
    const { title } = req.body; 
    const taskId = req.params.id; 
    const userId = req.user.id;
    const updatedTask = await Task.findOneAndUpdate(
      { _id: taskId, user: userId }, 
      { title },                    
      { new: true }                 
    );
    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found or user not authorized' });
    }
    res.status(200).json(updatedTask); 
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id; 
    const userId = req.user.id;

    const task = await Task.findOneAndDelete({ _id: taskId, user: userId });

    if (!task) {
      return res.status(404).json({ message: 'Task not found or user not authorized' });
    }
    res.status(200).json({ message: 'Task deleted successfully' });

  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};