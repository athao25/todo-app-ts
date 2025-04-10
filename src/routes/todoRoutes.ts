import express from 'express';
import {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo
} from '../controllers/todoController';

const router = express.Router();

// Get all todos
router.get('/', getTodos);

// Get a single todo
router.get('/:id', getTodo);

// Create a todo
router.post('/', createTodo);

// Update a todo
router.put('/:id', updateTodo);

// Delete a todo
router.delete('/:id', deleteTodo);

export default router; 