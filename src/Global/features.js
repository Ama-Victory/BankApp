import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:{}
}

export const bankApp=createSlice({
    name:"bankAppStore",
    initialState,
    reducers:{
        bankUser:(state,action)=>{
            state.user=action.payload
        }
    }
})



export const {bankUser}=bankApp.actions

export default bankApp.reducer;