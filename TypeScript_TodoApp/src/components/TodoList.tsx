import React from 'react'
import Todo from './Todo'
import type { TodoType } from '../types/types'
import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'

function TodoList() {

    const { todos } = useSelector((store: RootState) => store.todo)
    return (
        <div>
            {todos && todos.map((todo: TodoType) => (
                <Todo key={todo.id} todoProps={todo} />
            ))
            }

        </div>
    )
}

export default TodoList