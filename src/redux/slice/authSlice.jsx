import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggeIn: false,
    email: null,
    useName: null,
    useID: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SET_ACTIVE_USER: (state, action) => {
            console.log(action.payload);
            const { email, userName, userID } = action.payload
            state.isLoggeIn = true;
            state.email = email;
            state.useName = userName;
            state.useID = userID;

        },
        REMOVE_ACTIVE_USER(state, action) {
            state.isLoggeIn = false;
            state.email = null;
            state.useName = null;
            state.useID = null;

        }
    },
});

export const { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } = authSlice.actions

export const selectIsLoggeIn = (state) => state.auth.isLoggeIn;
export const selectEmail = (state) => state.auth.email;
export const selectUserName = (state) => state.auth.useName;
export const selectUserID = (state) => state.auth.UserID;



export default authSlice.reducer