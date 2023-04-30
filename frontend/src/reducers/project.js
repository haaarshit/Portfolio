// import { createReducer} from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    
}

const updateProjectSlice = createSlice({
    name: 'loginReducer',
    initialState,
    reducers: {
        addProjectRequest(state) {
            state.loading = true;
        },
        
        addProjectSuccess(state, action) {
            state.loading = false;
            state.message = action.payload;
        },
        
        addProjectFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        deleteProjectRequest(state) {
            state.loading = true;
        },
        
        deleteProjectSuccess(state, action) {
            state.loading = false;
            state.message = action.payload;
        },
        
        deleteProjectFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export const { addProjectRequest,addProjectFailure,addProjectSuccess,deleteProjectRequest,deleteProjectFailure,deleteProjectSuccess} = updateProjectSlice.actions
const updateProjectReducer = updateProjectSlice.reducer
export default updateProjectReducer