import { Delete } from '@mui/icons-material'
import { Typography} from '@mui/material'
import React from 'react'
import { AiOutlineProject } from 'react-icons/ai'
import './project.css'
import { useDispatch } from 'react-redux'
import { deleteProjects, getUser } from '../../actions/user'



// project cards
function ProjectCard({id, url, projectImage, projectTitle, description, technologies, isAdmin = false }) {

    const dispatch = useDispatch()

    const deleteProject = (i)=>{
        dispatch(deleteProjects(i))
        dispatch(getUser())
    }
    return <>

        <a href={url} className="projectCard" target='_blank' >
            <div>
                <img src={projectImage} alt="project"  />
                <Typography variant='h5' >{projectTitle}</Typography>
            </div>
            <div>
                <Typography variant='h4'>About Project</Typography>
                <Typography >{description}</Typography>
                <Typography variant='h6'>Tech Stack: {technologies}</Typography>
            </div>
        </a>
        {
            isAdmin && (
                <button onClick={()=>deleteProject(id)} style={{ color: 'rgba(45,45,45,0.7' }}><Delete /></button>
            )
        }
    </>
}

// projects
function Project({projects}) {
    // const projects = [1,2,3]
    return (
        <div className='projects'>
            <Typography variant='h3'>Projects <AiOutlineProject /></Typography>
            <div className="projectWrapper">
                {
                    projects.map(Element => {
                        return (
                            <ProjectCard
                            
                                url={Element.url}
                                projectImage={Element.image.url}
                                projectTitle={Element.title}
                                description={Element.description}
                                technologies={Element.techstack}
                            />
                        )
                    })

                }
            </div>

        </div>
    )
}
 export {ProjectCard}
export default Project
