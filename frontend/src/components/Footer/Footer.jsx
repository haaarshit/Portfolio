import React from 'react'
import {  Typography } from '@mui/material'
import {BsLinkedin,BsInstagram,BsTwitter,BsGithub} from 'react-icons/bs'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer'>
            <div>
                <Typography variant='h5'>About Me</Typography>
                <Typography >
                    Hello!! My name is <b> Harshit Tripathi </b>
                     An Aspiring <strong> SOFTWARE DEVELOPER </strong>
                    <br />
                    I love to build things on web
                </Typography>
                <Link to='/contact' >
                    <Typography className='contactFooterBtn'>Contact Me</Typography>
                </Link>
            </div>
            <div>
               <Typography variant="h6">Social Media</Typography>
               <a href="https://www.linkedin.com/in/harshit-tripathi-374046228/" target="blank">
                <BsLinkedin/>
               </a>
               <a href="https://www.linkedin.com/in/harshit-tripathi-374046228/" target="blank">
                <BsTwitter/>
               </a>
               <a href="https://www.linkedin.com/in/harshit-tripathi-374046228/" target="blank">
                <BsInstagram/>
               </a>
               <a href="https://github.com/coderharsx1122" target="blank">
                <BsGithub/>
               </a>
            </div>
        </div>
    )
}

export default Footer
