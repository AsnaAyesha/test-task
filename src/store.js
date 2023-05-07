import { configureStore } from "@reduxjs/toolkit";
import { addUser } from "./components/userSlice";

export const store = configureStore({
    reducer:{
        counter: addUser
    }
})