const express = require('express');

const router = express.Router();

const Todo = require('../models/Todo'); // Import the Model of a Todo


// '/' is the same as '/todos' b/c of the middleware in app.js
router.get('/', async (req, res) => {
  try {
    const allTodos = await Todo.find();
    res.json(allTodos);
  } catch (err) {
    res.json({message: err});
  }
});

/*
router.get('/:specificTodoId', async (req, res) => {
  try {
    const specificTodo = await Todo.findById(req.params.specificTodoId);
    res.json(specificTodo);
  } catch (err) {
    res.json({message: err});
  }
});

router.get('/aspecificroute', (req, res) => {
  res.send('get request made on aspecificroute');
});
*/

router.post('/', async (req, res) => {
  const newTodo = Todo({
    title: req.body.title,
    category: req.body.category
  });

  try {
    const newSavedTodo = await newTodo.save();
    res.json(newSavedTodo);
  } catch (err) {
    res.json({message: err});
  }
});

/*
router.delete('/:specificTodoId', async (req, res) => {
  try {
    const removedTodo = await Todo.remove({_id: req.params.specificTodoId});
    res.json(removedTodo);
  } catch (err) {
    res.json({message: err});
  }
});

router.patch('/:specificTodoId', async (req, res) => {
  try {
    const updatedTodo = await Todo.updateOne(
      {_id: req.params.specificTodoId},
      { $set: { title: req.body.title } }
      );
    res.json(updatedTodo);
  }
  catch (err) {
    res.json({message: err});
  }
});
*/


module.exports = router;