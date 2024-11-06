import { createSlice, nanoid } from "@reduxjs/toolkit";


const initailState = {
    todos: [{id: 1, text: "Hello world"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initailState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid, 
                text: action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        // updateTodo: (state, action) => {
        //     action.id
        // },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer