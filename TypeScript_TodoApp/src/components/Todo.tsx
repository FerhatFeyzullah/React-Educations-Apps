import React, { useState } from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import '../css/todo.css'
import type { TodoType } from '../types/types';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodo } from '../redux/todoSlice';


interface TodoProps {
    todoProps: TodoType
}


function Todo({ todoProps }: TodoProps) {
    const { id, content } = todoProps;
    const dispatch = useDispatch();

    const [editable, setEditable] = useState<boolean>(false);
    const [updatedTodo, setUpdatedTodo] = useState<string>(content);

    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id));
    }
    const handleUpdateTodo = () => {
        const todo: TodoType = {
            id: id,
            content: updatedTodo
        }
        dispatch(updateTodo(todo));
        setEditable(false);
    }

    return (
        <div className='todo-main'>

            {editable ? <input type='text' className='update-input'
                value={updatedTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUpdatedTodo(e.target.value)} />
                : <div>{content}</div>}

            <div>
                <IoMdRemoveCircleOutline onClick={handleRemoveTodo} className='icons' style={{ marginRight: '15px' }} />
                {editable ? <FaCheck className='icons' onClick={handleUpdateTodo} /> : <FaRegEdit className='icons' onClick={() => setEditable(true)} />}



            </div>
        </div>
    )
}

export default Todo