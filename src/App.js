import { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const App = () => {

    const [todos, setTodos] = useState([
        { id: 1, title: 'React', done: true },
        { id: 2, title: 'Angular', done: false },
        { id: 3, title: 'Vue', done: false }
    ]);

    const addTodo = (text) => {
        if(!text.trim()) return;
        let newTodo = { id: Date.now(), title: text, done: false };

        setTodos([...todos, newTodo]);
    }

    const removeTodo = id => {
        let newTodos = todos.filter(el => el.id !== id);

        setTodos(newTodos);
    }

    const doneTodo = id => {
        let newTodos = todos.map(el => {
            if (el.id === id) el.done = !el.done;
            return el;
        });

        setTodos(newTodos);
    }

    return (
        <div className="App">
            <AddTodo addTodo={addTodo} />
            <TodoList todos={todos} removeTodo={removeTodo} doneTodo={doneTodo} />
        </div>
    );

}

export default App;