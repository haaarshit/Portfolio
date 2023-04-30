import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Contact.css'
import { contactUs } from '../../actions/user'
import { Toast, toast } from 'react-toastify';

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage]  = useState('')
  const dispatch = useDispatch()
  const {message:alertMsg,error} = useSelector(state=>state.contactUs)
  const onsubmitHandler = (e) => {
    e.preventDefault() 
    console.log(name)
    console.log(email)
    console.log(message)
    dispatch(contactUs(name,email,message))
    if(alertMsg){
      toast.success(alertMsg)
    }
  }
  return (
    <div className='contact'>
      <div className="contactRightBar"></div>
      <div className="contactContainer">
        <form action="" className="contactContainerForm">
          <Typography variant='h4'>Contact Me</Typography>
          <input type="text" placeholder='name' value={name} onChange={e => { setName(e.target.value) }} />
          <input type="email" placeholder='email' value={email} onChange={e => { setEmail(e.target.value) }} />
          <textarea name="" id="" cols="35" rows="5" placeholder='message' value={message} onChange={e => { setMessage(e.target.value) }}></textarea>
          <Button variant='contained' type='submit' onClick={(e) => onsubmitHandler(e)}>Send</Button>
        </form>
      </div>
    </div>
  )
}

export default Contact
