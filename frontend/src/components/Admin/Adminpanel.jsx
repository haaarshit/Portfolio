import React, { useEffect, useState } from 'react'
import './admin.css'
import { Button, Typography, avatarClasses } from '@mui/material'
import { Link } from 'react-router-dom'
import { AiOutlineProject } from 'react-icons/ai'
import { TimelineRounded } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, updateUser } from '../../actions/user'
import { toast } from 'react-toastify'
import { clearMessage } from '../../reducers/login'




// skillinput component
const SkillInput = ({ skillnum, skillsstate, setSkillsState }) => {

  const handleImage = (e, num) => {
    const file = e.target.files[0];
    const Reader = new FileReader()
    Reader.readAsDataURL(file)
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        if (num === 1) {
          setSkillsState({ ...skillsstate, image1: Reader.result });
        }
        if (num === 2) {
          setSkillsState({ ...skillsstate, image2: Reader.result });
        }
        if (num === 3) {
          setSkillsState({ ...skillsstate, image3: Reader.result });
        }
        if (num === 4) {
          setSkillsState({ ...skillsstate, image4: Reader.result });
        }
        if (num === 5) {
          setSkillsState({ ...skillsstate, image5: Reader.result });
        }
        if (num === 6) {
          setSkillsState({ ...skillsstate, image6: Reader.result });
        }
      }
      
    }
  }

  return (
    <div>
      <Typography variant='h5'>Skill {skillnum}</Typography>
      <input type="file" className='adminPanelFileUpload'
        accept='image/*' onChange={(e) => { handleImage(e, skillnum) }} />
    </div>
  )
}


// main component
function Adminpanel() {


  const dispatch = useDispatch()

  const [skills, setSkills] = useState({})

  const [name, setName] = useState('')

  const [about, setAbout] = useState({
    name: '',
    title: '',
    subtitle: '',
    description: '',
    Avatar: ''
  })
  const [email, setEmail] = useState('')


  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
   dispatch(updateUser(name, email, password, skills, about))
  }

  const { message } = useSelector(state => state.login)
  const logoutHandler = () => {
    dispatch(logout())
    dispatch(login())

  }

  const handleAboutImage = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader()
    Reader.readAsDataURL(file)
    Reader.onload = () => {
      setAbout({...about, Avatar: Reader.result })
    }
    console.log(about)
  }



  useEffect(() => {

    if (message) {
      toast.success(message)
    }
  }, [message])


  return (
    <div className='adminPanel'>
      <div className="adminPanelContainer">
        <Typography variant='h4'>ADMIN DASHBOARD</Typography>
        <form >
          <input type="text"
            placeholder='Name'
            value={name}
            onChange={(e) => { setName(e.target.value) }}
            className='adminpanelInput'
          />
          <input type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            className='adminpanelInput'
          />
          <input type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
            className='adminpanelInput'
          />

          <div className="adminPanelSkills">
            <SkillInput skillnum={1} skillsstate={skills} setSkillsState={setSkills} />
            <SkillInput skillnum={2} skillsstate={skills} setSkillsState={setSkills} />
            <SkillInput skillnum={3} skillsstate={skills} setSkillsState={setSkills} />
            <SkillInput skillnum={4} skillsstate={skills} setSkillsState={setSkills} />
            <SkillInput skillnum={5} skillsstate={skills} setSkillsState={setSkills} />
            <SkillInput skillnum={6} skillsstate={skills} setSkillsState={setSkills} />
          </div>

          <div className="adminPanelAbout">
            <fieldset>
              <legend>About</legend>
              <input type="text"
                placeholder='Name'
                value={about.name}
                onChange={(e) => { setAbout({ ...about, name: e.target.value }) }}
                className='adminpanelInput'
              />
              <input type="text"
                placeholder='Title'
                value={about.title}
                onChange={(e) => { setAbout({ ...about, title: e.target.value }) }}
                className='adminpanelInput'
              />
              <input type="text"
                placeholder='Subtitle'
                value={about.subtitle}
                onChange={(e) => { setAbout({ ...about, subtitle: e.target.value }) }}
                className='adminpanelInput'
              />
              <input type="text"
                placeholder='Description'
                value={about.description}
                onChange={(e) => { setAbout({ ...about, description: e.target.value }) }}
                className='adminpanelInput'
              />
              <input type="file"
                placeholder='Description'
                onChange={handleAboutImage}
                accept='image/*'
                className='adminPanelFileUpload'
              />
            </fieldset>
          </div>

          <Link to='/admin/timeline'>
            Timeline <TimelineRounded />
          </Link>
          <Link to='/admin/project'>
            Project <AiOutlineProject />
          </Link>
          <Button variant='contained'
            type='submit' onClick={submitHandler}>Update</Button>

        </form>
        <Button variant='contained' color='error'  onClick={logoutHandler}>Logout</Button>

      </div>
    </div>
  )
}

export default Adminpanel