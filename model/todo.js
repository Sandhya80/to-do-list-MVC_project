const pool = require('./database');

// creates an entry in the todo database table:
const create = (description) =>
  pool.query('INSERT INTO todo (description) VALUES ($1) RETURNING *', [
    description,
  ]);

//get method that will read all the tasks in the todo table:
const get = () => pool.query('SELECT * FROM todo');

//search for a to-do item to remove from the todo table:
const remove = (id) => pool.query('DELETE FROM todo WHERE todo_id = $1', [id]);

//export all three functions(create, get and remove):
module.exports = { create, get, remove };
