


const TodoItem = ({ item, removeTodo, doneTodo }) => {

    return (
        <div className={item.done ? "TodoItem done" : "TodoItem"}>
            <input type='checkbox' checked={item.done} onChange={() => doneTodo(item.id)} />
            <span>{item.title}</span>
            <button onClick={() => removeTodo(item.id)}>Del</button>
        </div>
    );
}

export default TodoItem;