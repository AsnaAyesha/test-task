import { createSlice } from "@reduxjs/toolkit"

const initialState = {user:[]}
const userSlice = createSlice({
    name:'user',
    initialState,
    reducer:{
        addUser: (state, action) => {
            console.log(action.payload);
            state.users = [...action.payload]
        }
    }
})

export const {addUser} =userSlice.actions;
export default userSlice.reducer;