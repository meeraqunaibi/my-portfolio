import React from 'react'
import "./work.css"
import { useNavigate } from 'react-router'


const Work = ({ projects }) => {
    const navigate = useNavigate();
    const showProject = (id) => {
        navigate(`/projects/${id}`)
        console.log("test", id);
    }
    return (
        <div className='works' id='work'>
            <h1>My Works</h1>
            <div className='projects'>
                {projects.map((project, index) =>
                    <div key={index} className='project' onClick={() => showProject(project.key)}>
                        <div className='project-image'>
                            <img src={project.images[0]} alt='project-image'/>
                        </div>
                        <div className='project-details'>
                            <h3>{project.title}</h3>
                            <p>{project.type}</p>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default Work