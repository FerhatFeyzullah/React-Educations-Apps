import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import type { TodoType } from '../types/types';
import { CreateTodo } from '../redux/todoSlice';

function TodoCreate() {

    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState<string>('');

    const handleCreateTodo = () => {
        if (newTodo.trim().length == 0) {
            alert('Todo Girmedin')
            return;
        }

        const todo: TodoType = {
            id: Math.floor(Math.random() * 999999999),
            content: newTodo
        }
        dispatch(CreateTodo(todo))
        setNewTodo('');
    }



    return (
        <div className='todo-create'>
            <input value={newTodo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
                className='create-input' type="text" placeholder='Todo Giriniz ...' />
            <button onClick={handleCreateTodo} className='create-button'>Kaydet</button>
        </div>
    )
}

export default TodoCreate