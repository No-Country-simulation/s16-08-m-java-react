import { useState, useEffect } from 'react';

type Todo = {
    id: string;
    title: string;
    done: boolean;
};

export default function Home() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [title, setTitle] = useState('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchTodos() {
            try {
                const response = await fetch('/api/todos');
                if (!response.ok) {
                    throw new Error('Error fetching todos');
                }
                const data = await response.json();
                setTodos(data);
            } catch (error) {
                setError('Failed to fetch todos');
                console.error(error);
            }
        }
        fetchTodos();
    }, []);

    const addTodo = async () => {
        try {
            const response = await fetch('/api/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, done: false }),
            });
            if (!response.ok) {
                throw new Error('Error adding todo');
            }
            const newTodo = await response.json();
            setTodos([...todos, newTodo]);
            setTitle('');
        } catch (error) {
            setError('Failed to add todo');
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Todo List</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {todos && todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={addTodo}>Add Todo</button>
        </div>
    );
}