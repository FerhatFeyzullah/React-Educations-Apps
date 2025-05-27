import React, { useState } from 'react'
import '../App.css'

function TodoCreate({ onCreateTodo }) {

    const [newtodo, setNewTodo] = useState("")

    const clearInput = () => {
        setNewTodo("");
    }

    const CreateTodo = () => {
        if (!newtodo) return;

        const request = {
            id: Math.floor(Math.random() * 999999999),
            content: newtodo
        }
        onCreateTodo(request)
        clearInput()
    }


    return (
        <div className='todo-create'>
            <input
                value={newtodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className='todo-input' type="text" placeholder='Todo Giriniz' />
            <button onClick={CreateTodo} className='todo-create-button'>Todo Oluştur</button>
        </div>
    )
}

export default TodoCreate