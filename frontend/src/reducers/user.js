// import { createReducer} from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    loading: true
}

// export const userReducer = createReducer(initialState,{
//     "GET_USER_REQUEST":(state)=>{
//         state.loading = true;
//     },
//     "GET_USER_SUCCESS":(state,action)=>{
//         state.loading = false;
//         // state.user = action.payload;
//     },
//     "GET_USER_FALIURE":(state,action)=>{
//         state.loading = false;
//         // state.error = action.payload;
//     }
// })

const userSlice = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        getUserRequest(state) {
            console.log("getUserRequest")
            state.loading = true;
        },

        getUserSuccess(state, action) {
            state.loading = false;
            state.user = action.payload;
        },

        getUserFailure(state, action) {
            console.log(state.loading)
            state.loading = false;
            state.error = action.payload;
            console.log('failure')
        },

    }
})

export const { getUserRequest, getUserFailure, getUserSuccess } = userSlice.actions
const userReducer = userSlice.reducer
export default userReducer