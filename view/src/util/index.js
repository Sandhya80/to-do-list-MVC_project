//create three exported functions that will perform the API calls to the Controller:
export const createTodo = async (todo) => {
    try {
      const res = await fetch('api/todo/create', {
        method: 'POST',
        body: todo,
      });
      return res.json();
    } catch (error) {
      return { error };
    }
  };
//create and export function 'getTodos' to perform a GET request to fetch all existing entries in the todo db:
  export const getTodos = async () => {
    try {
      const res = await fetch('api/todos');
      const data = await res.json();
      return data;
    } catch (error) {
      return { error };
    }
  };

//create and export a function 'removeTodo' that performs a DELETE request:
  export const removeTodo = async (id) => {
    try {
      await fetch(`/api/todo/${id}`, {
        method: 'DELETE',
      });
      return 'deleted';
    } catch (error) {
      return { error };
    }
  };
  