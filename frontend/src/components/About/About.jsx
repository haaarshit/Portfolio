import React from 'react'
import { Typography, duration } from '@mui/material'
import {motion} from "framer-motion"
import './About.css'
import { BsLinkedin, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Margin, MotionPhotosAuto, Opacity } from '@mui/icons-material'
function About({ aboutdata }) {
  return (
    <div className='about'>

      <div className='aboutcontainer2'>
        <motion.div
        
          animate={{
            opacity:1,
           
            x:10
          }}
          initial={{
            x:-100,
            opacity:0
          }}
          transition={
            {
              type:"spring",
              stiffness:200
            }
          }
        >
          
          <Typography variant='h5'>Hello, I'm </Typography>
          <Typography variant="h4">{aboutdata.name}</Typography>
          <Typography >{aboutdata.title}</Typography>
          <Typography >{aboutdata.description}</Typography>

          <Link to='/contact'  style={{textDecoration:"none",margin:"30px 0px"} } >
            <Typography className='contactFooterBtn'>Contact Me</Typography>
          </Link>
        </motion.div>
        <motion.div
        >
          
          <motion.div className='imagesection'
          animate={{
            opacity:1,
            scale:1,
          }}
          initial={{
           scale:0.4,
            opacity:0
          }}
          transition={
            {
              delay:1
            }
          }
          >

            <img src={aboutdata.Avatar.url} alt="myImg" className='aboutAvtarImage' />
          </motion.div>
        </motion.div>

      </div>
      {/* <div className='bubble'></div> */}
    </div>
  )
}

export default About
