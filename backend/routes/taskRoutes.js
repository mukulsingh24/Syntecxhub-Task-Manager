const express = require('express');
const router = express.Router();

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

const { Security } = require('../middleware/authmiddleware');

router.route('/')
  .get(Security, getTasks)      
  .post(Security, createTask);

router.route('/:id')
  .put(Security, updateTask)      
  .delete(Security, deleteTask);
  
module.exports = router;