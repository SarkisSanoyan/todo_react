import { useState } from "react";


const AddTodo = ({ addTodo }) => {


    const [input, setInput] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        addTodo(input);
        setInput('');
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type='text' value={input} onChange={e => setInput(e.target.value)} />
                <input type='submit' value='Add Todo'></input>
            </form>
        </div>
    )

}

export default AddTodo;