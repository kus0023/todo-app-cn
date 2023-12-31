
const express = require('express');
const router = express.Router();

//Controllers
const todoController = require('../controllers/todo_controller');


router.get('/', todoController.todo);

router.post('/todo', todoController.addTodo);

router.delete('/todo', todoController.deleteTodo);

module.exports = router;