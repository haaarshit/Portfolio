// import { createReducer} from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    
}

const loginSlice = createSlice({
    name: 'loginReducer',
    initialState,
    reducers: {
        loginRequest(state) {
            state.loading = true;
            state.isAuthenticated = false;
        },
        
        loginSuccess(state, action) {
            state.loading = false;
            state.isAuthenticated = true;
            state.message = action.payload;
        },
        
        loginFailure(state, action) {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        },
        clearError(state){
            state.error = null
        },
        clearMessage(state){
            state.message = null
        },
    }
})

export const { loginRequest, loginFailure, loginSuccess ,clearError,clearMessage} = loginSlice.actions
const loginReducer = loginSlice.reducer
export default loginReducer