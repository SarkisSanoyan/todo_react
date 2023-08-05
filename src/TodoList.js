import TodoItem from "./TodoItem";


const TodoList = ({ todos, removeTodo, doneTodo }) => {

    return (
        <div className="TodoList">
            {
                todos.map(todo => <TodoItem
                                    key={todo.id}
                                    item={todo}
                                    removeTodo={removeTodo}
                                    doneTodo={doneTodo}
                        /> )
            }
        </div>
    )
}

export default TodoList;