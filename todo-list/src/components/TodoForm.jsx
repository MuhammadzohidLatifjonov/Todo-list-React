import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo(value);

        setValue('')
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text"
                value={value}
                className="todo-input"
                placeholder="Bugun nima qilmoqchisiz?"
                onChange={(e) => setValue(e.target.value)} />
            <button type="submit" className="todo-btn">Add task</button>
        </form>
    )
}

export default TodoForm;
