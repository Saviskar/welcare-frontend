import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    username:sessionStorage.getItem("USER_NAME") || "",
    email:''
}

const userSlice = createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        login:(state,action)=>{
            sessionStorage.setItem("USER_NAME",action.payload.id)
            state.username = action.payload.id,
            state.email = action.payload.email
        }
    }
})

export const {login} = userSlice.actions;

export default userSlice.reducer;