import { createSlice } from "@reduxjs/toolkit";

const initailState = {
    status: false,
    useData: null,
}

const authSlice = createSlice({
    name: "auth",
    initailState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.useData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }

});

export const {login, logout} = authSlice.actions;

export default authSlice