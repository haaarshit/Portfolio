// import { createReducer} from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    
}

const contactUsSlice = createSlice({
    name: 'loginReducer',
    initialState,
    reducers: {
        contactUsRequest(state) {
            state.loading = true;
        },
        
        contactUsSuccess(state, action) {
            state.loading = false;
            state.message = action.payload;
        },
        
        contactUsFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        clearError(state){
            state.error = null
        }
    }
})

export const { contactUsRequest,contactUsFailure,contactUsSuccess} = contactUsSlice.actions
const contactReducer = contactUsSlice.reducer
export default contactReducer