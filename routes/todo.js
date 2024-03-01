// require express:
const express = require('express');
// require middlewares and functions from the controller/index.js file:
const { create, read, removeTodo } = require('../controller');
//require the router component:
const router = express.Router();


// Create POST route to create an todo
router.post('/todo/create', create);
// Create GET route to read an todo
router.get('/todos', read);
// Create DELETE route to remove an todo
router.delete('/todo/:id', removeTodo);

//export the router for the rest of the application:
module.exports = router;
