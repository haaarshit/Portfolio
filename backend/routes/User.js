import express from 'express'
import { 
    addProject, 
    addTimeline, 
    contact, 
    deleteProject, 
    deleteTimeline, 
    getUser, 
    login, 
    logout ,
    myProfile, 
    updateUser
} from '../controller/User.js'
import { isAuthenticated } from '../middlewares/auth.js'

export const userRouter = express.Router()

userRouter.route('/login').post(login)

userRouter.route('/logout').get(logout)

userRouter.route('/user').get(getUser)

userRouter.route('/me').get( isAuthenticated,myProfile)

userRouter.route('/contact').post(contact)

userRouter.route('/admin/update').put(isAuthenticated,updateUser)

userRouter.route('/admin/timeline/add').post(isAuthenticated,addTimeline)
userRouter.route('/admin/projects/add').post(isAuthenticated,addProject)

userRouter.route('/admin/timeline/:id').delete(isAuthenticated,deleteTimeline)
userRouter.route('/admin/projects/:id').delete(isAuthenticated,deleteProject)