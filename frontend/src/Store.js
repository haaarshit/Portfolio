import {configureStore} from '@reduxjs/toolkit'
// import { userReducer } from './reducers/user'
import userReducer from './reducers/user.js'
import loginReducer from './reducers/login.js'
import logoutReducer from './reducers/logout.js'
import loadUserReducer from './reducers/load_user.js'
import updateReducer from './reducers/updateUser.js'
import updateTimelineReducer from './reducers/timeline.js'
import updateProjectReducer from './reducers/project.js'
import contactReducer from './reducers/contact.js'


const store = configureStore({
    reducer:{
        user:userReducer,
        login:loginReducer,
        logout:logoutReducer,
        loadUser:loadUserReducer,
        updateUser:updateReducer,
        updateTimeline:updateTimelineReducer,
        updateProject:updateProjectReducer,
        contactUs:contactReducer
    }
})

export default store