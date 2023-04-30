// import { createReducer} from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    
}

const loadUserSlice = createSlice({
    name: 'loginReducer',
    initialState,
    reducers: {
        loadUserRequest(state) {
            console.log("getUserRequest")
            state.loading = true;
            state.isAuthenticated = false;
        },
        
        loadUserSuccess(state, action) {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        
        loadUserFailure(state, action) {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        },

    }
})

export const { loadUserRequest, loadUserFailure, loadUserSuccess } = loadUserSlice.actions
const loadUserReducer = loadUserSlice.reducer
export default loadUserReducer