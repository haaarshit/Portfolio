import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import './Login.css'
import '../Contact/Contact.css'
import { login } from '../../actions/user';
import {  toast } from 'react-toastify';
import { clearError,clearMessage } from '../../reducers/login';

function Login() {

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()

  const {loading,message,error} = useSelector(state=>state.login)


  const onsubmitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
    
  }



  useEffect(()=>{
    if(loading){
      toast.loading('Verifying')
     }
     if(error){
       toast.error('Invalid credentials')
       dispatch(clearError())
      }
      if(message){
        // toast.success(message)
        // dispatch(clearMessage())
        setPassword('')
        setEmail('')
     }
  },[message,error])
  return (
    <div className='login'>
      <div className="loginContainer">
        <form action="" className='loginForm' onSubmit={onsubmitHandler}>
          <Typography variant='h4'>ADMIN DASHBOARD</Typography>
          <div>
            <input type="email" placeholder='Enter email' value={email} onChange={e => { setEmail(e.target.value) }} />
            <input type="password" placeholder='Admin password' value={password} onChange={e => { setPassword(e.target.value) }} />
            <Button type='submit' variant='contained' disabled={loading}>Login</Button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login
