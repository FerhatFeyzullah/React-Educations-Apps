import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { TodoInitialState, TodoType } from '../types/types'

const initialState: TodoInitialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        CreateTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
            state.todos = [...state.todos, action.payload];
        },
        removeTodoById: (state: TodoInitialState, action: PayloadAction<number>) => {
            state.todos = [...state.todos.filter((todo: TodoType) => todo.id !== action.payload)]
        },
        updateTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
            state.todos = state.todos.map((todo: TodoType) => todo.id !== action.payload.id ? todo : action.payload)

        }
    }
})

export const { CreateTodo, removeTodoById, updateTodo } = todoSlice.actions

export default todoSlice.reducer