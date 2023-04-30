import axios from "axios";
import { getUserRequest, getUserSuccess, getUserFailure } from "../reducers/user";
import { loginRequest, loginSuccess, loginFailure } from "../reducers/login";
import { logoutFailure, logoutRequest, logoutSuccess } from "../reducers/logout";
import { loadUserRequest, loadUserFailure, loadUserSuccess } from "../reducers/load_user";
import { updateUserFailure, updateUserRequest, updateUserSuccess } from "../reducers/updateUser";
import { addTimelineFailure, addTimelineRequest, addTimelineSuccess, deleteTimelineFailure, deleteTimelineRequest, deleteTimelineSuccess } from "../reducers/timeline";
import { addProjectFailure, addProjectRequest, addProjectSuccess,deleteProjectFailure, deleteProjectRequest, deleteProjectSuccess } from "../reducers/project";
import { contactUsFailure, contactUsRequest, contactUsSuccess } from "../reducers/contact";


const baseurl = 'http://localhost:5500'


// getUser
export const getUser = () =>
    async (dispatch) => {
        try {
            dispatch(getUserRequest)

            const { data } = await axios.get(`${baseurl}/api/v1/user`)
            dispatch(getUserSuccess(data.user))
        } catch (error) {
            dispatch(getUserFailure(error.response.data.message))
        }
    }



// login 
export const login = (email, password) =>
    async (dispatch) => {
        try {
            dispatch(loginRequest)

            const { data } = await axios.post(`${baseurl}/api/v1/login`, {
                email: email,
                password: password
            },
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }

            )
            dispatch(loginSuccess(data.message))
        } catch (error) {
            dispatch(loginFailure(error.response.data.message))
        }
    }


// logout 
export const logout = () =>
    async (dispatch) => {
        try {
            dispatch(logoutRequest)

            const { data } = await axios.get(`${baseurl}/api/v1/logout`)
            dispatch(logoutSuccess(data))
        } catch (error) {
            dispatch(logoutFailure(error.response.data.message))
        }
    }

// loaduser
export const loadUser = () =>
    async (dispatch) => {
        try {
            dispatch(loadUserRequest)
            const { data } = await axios.get(`${baseurl}/api/v1/me`, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            dispatch(loadUserSuccess(data.message))
        } catch (error) {
            dispatch(loadUserFailure(error.response.data.message))
        }
    }


// update user
export const updateUser = (name, email, password, skills, about) =>
    async (dispatch) => {
        try {
            dispatch(updateUserRequest)
            const { data } = await axios.put(`${baseurl}/api/v1/admin/update`, {
                name, email, password, skills, about
            }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            dispatch(updateUserSuccess(data.message))
        } catch (error) {
            dispatch(updateUserFailure(error.response.data.message))
        }
    }
// update timeline
export const addTimeline = (title, description, date) =>
    async (dispatch) => {
        try {
            dispatch(addTimelineRequest)
            const { data } = await axios.post(`${baseurl}/api/v1/admin/timeline/add`, {
                title,
                description,
                date
            }, {
                withCredentials: true,
                // headers: {
                //     'Content-Type': 'application/json'
                // }
            })
            dispatch(addTimelineSuccess(data.message))
        } catch (error) {
            dispatch(addTimelineFailure(error.response.data.message))
        }
    }

    
export const deleteTimeline = (id) =>
    async (dispatch) => {
        try {
            dispatch(deleteTimelineRequest)
            const { data } = await axios.delete(`${baseurl}/api/v1/admin/timeline/${id}`, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            dispatch(deleteTimelineSuccess(data.message))
        } catch (error) {
            dispatch(deleteTimelineFailure(error.response.data.message))
        }
    }



    // update projects
export const addProjects = (url,title,image, description,techstack) =>
    async (dispatch) => {
        try {
            dispatch(addProjectRequest)
            const { data } = await axios.post(`${baseurl}/api/v1/admin/projects/add`, {
                url,
                title,
                image,
                description,
                techstack
            },{
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(data)
            dispatch(addProjectSuccess(data.message))
        } catch (error) {
            dispatch(addProjectFailure(error.response.data.message))
        }
    }

    
export const deleteProjects = (id) =>
    async (dispatch) => {
        try {
            dispatch(deleteProjectRequest)
            const { data } = await axios.delete(`${baseurl}/api/v1/admin/projects/${id}`, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            dispatch(deleteProjectSuccess(data.message))
        } catch (error) {
            dispatch(deleteProjectFailure(error.response.data.message))
        }
    }

// contact
export const contactUs = (name,email,message) =>
    async (dispatch) => {
        try {
            dispatch(contactUsRequest)
            const { data } = await axios.post(`${baseurl}/api/v1/contact`,{
                name,
                email,
                message

            }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            dispatch(contactUsSuccess(data.message))
        } catch (error) {
            dispatch(contactUsFailure(error.response.data.message))
        }
    }