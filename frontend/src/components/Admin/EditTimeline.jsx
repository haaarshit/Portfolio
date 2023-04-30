import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { addTimeline, deleteTimeline, getUser } from '../../actions/user'
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Delete } from '@mui/icons-material'

function Timeline() {

  const dispatch = useDispatch()
  const { message, error, loading } = useSelector(state => state.updateUser)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')

  const { user } = useSelector(state => state.user)
  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(addTimeline(title, description, date))
    dispatch(getUser())
  }
  const deleteHandler = async ( id) => {
    // console.log(id)
    dispatch(deleteTimeline(id))
    dispatch(getUser())
  }

  useEffect(() => {
    if (error) {
      toast.error(error)
    }
    if (message) {
      toast.success(message)
    }

  }, [message, error])


  return (
    <div className='adminPanel'>
      <div className="adminPanelContainer">
        <Typography variant='h4'>ADD TIMELINE</Typography>
        <form onSubmit={submitHandler}>
          <input type="text"
            placeholder='Name'
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
            className='adminpanelInput'
          />
          <input type="text"
            placeholder='Description'
            value={description}
            onChange={(e) => { setDescription(e.target.value) }}
            className='adminpanelInput'
          />
          <input type="date"
            placeholder='date'
            value={date}
            onChange={(e) => { setDate(e.target.value) }}
            className='adminpanelInput'
          />
          <Button variant='contained'
            type='submit' disabled={loading} onClick={e => { submitHandler(e) }}>Add</Button>
          <Link to='/login' variant='contained'
            type='submit' disabled={loading}>Back</Link>

        </form>
        <div className="timelineItems">

          {
            user &&
            user.timeline &&
            user.timeline.map((item) => {
              return (
                <div className="timelineItem" key={item._id}>
                  <h2 className="title">{item.title}</h2>
                  <p className="decription">{item.description}</p>
                  <p className='date'>{item.date && item.date.toString().split('T')[0]}</p>
                  <button onClick={() => { deleteHandler(item._id) }}><Delete /></button>
                </div>

              )
            })

          }
        </div>

      </div>
    </div>
  )
}
export default Timeline