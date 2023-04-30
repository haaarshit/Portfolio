import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProjects, deleteProjects, getUser } from '../../actions/user'
import { Delete } from '@mui/icons-material'
import { ProjectCard } from '../Projects/Project'

function EditProject() {

  const dispatch = useDispatch()
  const { message, error, loading } = useSelector(state => state.updateUser)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')
  const [techstack, setTechStack] = useState('')
  const [image, setImage] = useState('')
  const { user } = useSelector(state => state.user)

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(addProjects(url, title, image, description, techstack))
    dispatch(getUser())
  }

  const handleImage = async (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader()
    Reader.readAsDataURL(file)
    Reader.onload = () => {
      setImage(Reader.result)
      console.log(image)
    }
  }


  const deleteHandler = () => { }
  return (
    <div className='adminPanel'>
      <div className="adminPanelContainer">
        <Typography variant='h4'>ADD PROJECTS</Typography>
        <form onSubmit={submitHandler}>
          <input type="text"
            placeholder='URL'
            value={url}
            onChange={(e) => { setUrl(e.target.value) }}
            className='adminpanelInput'
          />
          <input type="text"
            placeholder='title'
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
          <input type="text"
            placeholder='TECH STACK'
            value={techstack}
            onChange={(e) => { setTechStack(e.target.value) }}
            className='adminpanelInput'
          />
          <input type="file"
            placeholder='Description'
            onChange={handleImage}
            accept='image/*'
            className='adminPanelFileUpload'
          />
          <Button variant='contained'
            type='submit' disabled={loading} onClick={e => { submitHandler(e) }}>Add</Button>
          <Link to='/login' variant='contained'
            type='submit' disabled={loading}>Back</Link>

        </form>
      </div>

      <div className="projectt">

        <div className="projectWrapper">
          {
            user &&
            user.projects &&
            user.projects.map((item) => {
              return (
                <ProjectCard id={item._id}
                  url={item.url}
                  projectImage={item.image.url}
                  projectTitle={item.title}
                  description={item.description}
                  technologies={item.techstack}
                  isAdmin={true}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default EditProject
