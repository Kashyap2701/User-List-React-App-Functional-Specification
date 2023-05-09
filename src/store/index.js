import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./CardSlice";
import hoverSlice from "./HoverSlice";
import UserSlice from "./UserSlice";

const store = configureStore({
    reducer:{
        'card': cardSlice.reducer,
        'hover':hoverSlice.reducer,
        'user':UserSlice.reducer
    }
})

export default store;