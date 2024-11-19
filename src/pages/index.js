import { useEffect, useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch('/todos');
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const createTodo = async () => {
    try {
      const response = await fetch('/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newTodo, completed: false }),
      });
      const todo = await response.json();
      setTodos([...todos, todo]);
      setNewTodo('');
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  const updateTodo = async (id, updatedTodo) => {
    try {
      const response = await fetch(`/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTodo),
      });
      const todo = await response.json();
      setTodos(todos.map(t => (t.id === id ? todo : t)));
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await fetch(`/todos/${id}`, {
        method: 'DELETE',
      });
      setTodos(todos.filter(t => t.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-600 text-white">
      <main className="px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to My Accessible, Responsive Next.js App
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          This landing page is designed to be responsive and accessible on all devices and for all
          users. Built with a focus on usability and readability.
        </p>
        <a
          href="#get-started"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          aria-label="Get started with our app"
        >
          Get Started
        </a>
        <section className="mt-8 w-full max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Todo List</h2>
          <div className="mb-4">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="p-2 rounded-lg"
              placeholder="New Todo"
            />
            <button onClick={createTodo} className="ml-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg">
              Add Todo
            </button>
          </div>
          <ul className="list-disc list-inside">
            {todos.map(todo => (
              <li key={todo.id} className="text-left flex justify-between items-center">
                <span className={todo.completed ? 'line-through' : ''}>{todo.title}</span>
                <div>
                  <button
                    onClick={() => updateTodo(todo.id, { ...todo, completed: !todo.completed })}
                    className="ml-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-2 rounded-lg"
                  >
                    {todo.completed ? 'Undo' : 'Complete'}
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="ml-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="mt-8 text-sm">
        <p>&copy; {new Date().getFullYear()} My Next.js App. All rights reserved.</p>
      </footer>
    </div>
  );
}