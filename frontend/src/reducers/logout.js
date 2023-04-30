// import { createReducer} from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    
}

const logoutSlice = createSlice({
    name: 'logoutReducer',
    initialState,
    reducers: {
        logoutRequest(state) {
            console.log("getUserRequest")
            state.loading = true;
        },
        
        logoutSuccess(state, action) {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null
            state.message = action.payload;
        },
        
        logoutFailure(state, action) {
            state.loading = false;
            state.isAuthenticated = true;
            state.error = action.payload;
        },

    }
})

export const { logoutRequest, logoutFailure, logoutSuccess } = logoutSlice.actions
const logoutReducer = logoutSlice.reducer
export default logoutReducer