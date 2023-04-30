
import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { userRouter } from './routes/User.js'
import { config } from 'dotenv';

const corsOptions = {
    origin: 'http://localhost:3000', //frontend url
 credentials: true
  };


  export const app = express()
 app.use(cookieParser())
app.use(cors(corsOptions))
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true, limit: "50mb" }))
app.use('/api/v1', userRouter)