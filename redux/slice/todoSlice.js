import { createSlice } from "@reduxjs/toolkit";

export const todoSlice= createSlice({

    name:"todo",
    initialState:{
        value:[],
    },

    reducers:{
        addToDO:(state, action)=>{
            state.value.push(action.payload);
        },
        removeToDO:(state, action)=>{
            state.value.splice(action.payload,1)
        },

        editToDo:(state, action)=>{
            state.value.splice(action.payload["index"],1,action.payload["Task"])
        }

    }
})

export const{addToDO,removeToDO,editToDo}=todoSlice.actions;
export default todoSlice.reducer;