import { createSlice } from "@reduxjs/toolkit";

const initialState = {value: 0}

export const counterSlice = createSlice({
    name: 'count',
    initialState,
    reducers:{
        increment: (state) =>{
            state.value +=1;
        },
        decrement: (state) =>{
            state.value -=1;
        },
        incrementByAmount:(state,action) =>{
            state.value += Number(action.payload)
        }
    }
})

export const selectCount = state =>state.count.value;
export const {increment,decrement,incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;