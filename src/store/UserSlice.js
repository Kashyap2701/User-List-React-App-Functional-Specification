import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUserData = createAsyncThunk('fetchUserData',async(currentPage=0) => {
    const response = await fetch(
        `https://servers-omega.vercel.app/users/p?limit=8&page=${currentPage}`
        );
    const data = response.json();
    return data;
});

const UserSlice = createSlice({
    name:'user',
    initialState: { users:[],status:'' },
    reducers:{
        changeOnPageUsers(state,action){
            state.users = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchUserData.pending,state => {
            state.status = 'pending';
            state.users = [];
        }),
        builder.addCase(fetchUserData.fulfilled,(state, action) => {
            state.status = 'success';
            state.users = action.payload.users;
        })
        builder.addCase(fetchUserData.rejected,state=>{
            state.status = 'error';
            state.users = [];
        })
    }
})

export const userActions = UserSlice.actions;
export default UserSlice;