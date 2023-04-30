// import { createReducer} from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    
}

const updateTimelineSlice = createSlice({
    name: 'loginReducer',
    initialState,
    reducers: {
        addTimelineRequest(state) {
            state.loading = true;
        },
        
        addTimelineSuccess(state, action) {
            state.loading = false;
            state.message = action.payload;
        },
        
        addTimelineFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        deleteTimelineRequest(state) {
            state.loading = true;
        },
        
        deleteTimelineSuccess(state, action) {
            state.loading = false;
            state.message = action.payload;
        },
        
        deleteTimelineFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export const { addTimelineRequest,addTimelineFailure,addTimelineSuccess,deleteTimelineRequest,deleteTimelineFailure,deleteTimelineSuccess} = updateTimelineSlice.actions
const updateTimelineReducer = updateTimelineSlice.reducer
export default updateTimelineReducer