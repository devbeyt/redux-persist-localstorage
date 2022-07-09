import { createSlice } from "@reduxjs/toolkit";

const initialState = {items: []}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state,action) =>{
            state.items.push(action.payload)
        },
        removeTodo: (state,action) =>{
            const id = action.payload
            const filtered = state.items.filter(item=>item.id !== id)
            state.items = filtered;
        }
    }
})


export const {addTodo,removeTodo} = todoSlice.actions;
export default todoSlice.reducer;