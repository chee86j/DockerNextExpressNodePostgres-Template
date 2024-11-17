const express = require('express');
const app = express.Router();
const Todo = require('../models/Todo');

// Utility function to handle errors
const handleError = (res, error) => {
  console.error(error);
  if (error.name === 'SequelizeValidationError') {
    res.status(400).json({ error: 'Validation error', details: error.errors });
  } else if (error.name === 'SequelizeDatabaseError') {
    res.status(500).json({ error: 'Database error', details: error.message });
  } else {
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
};

// Create a new todo
app.post('/', async (req, res) => {
  try {
    const { title, completed } = req.body;
    const todo = await Todo.create({ title, completed });
    res.status(201).json(todo);
  } catch (error) {
    handleError(res, error);
  }
});

// Get all todos
app.get('/', async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.status(200).json(todos);
  } catch (error) {
    handleError(res, error);
  }
});

// Get a single todo by ID
app.get('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (todo) {
      res.status(200).json(todo);
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  } catch (error) {
    handleError(res, error);
  }
});

// Update a todo by ID
app.put('/:id', async (req, res) => {
  try {
    const { title, completed } = req.body;
    const [updated] = await Todo.update({ title, completed }, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedTodo = await Todo.findByPk(req.params.id);
      res.status(200).json(updatedTodo);
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  } catch (error) {
    handleError(res, error);
  }
});

// Delete a todo by ID
app.delete('/:id', async (req, res) => {
  try {
    const deleted = await Todo.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  } catch (error) {
    handleError(res, error);
  }
});

module.exports = app;