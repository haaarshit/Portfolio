// import { createReducer} from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    
}

const updateUserSlice = createSlice({
    name: 'loginReducer',
    initialState,
    reducers: {
        updateUserRequest(state) {
            state.loading = true;
        },
        
        updateUserSuccess(state, action) {
            state.loading = false;
            state.message = action.payload;
        },
        
        updateUserFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        clearError(state){
            state.error = null
        }
    }
})

export const { updateUserRequest,updateUserFailure,updateUserSuccess} = updateUserSlice.actions
const updateReducer = updateUserSlice.reducer
export default updateReducer