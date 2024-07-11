import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import './viewProject.css'

const ViewProject = (props) => {
    const [oneProject, setOneProject] = useState(null);
    const id = useParams();
    useEffect(() => {
        const currentProject =
            props.projects.find((p) => p.key === id.id) || null;
        setOneProject(currentProject);
        console.log(currentProject);
    });
    return (
        <div className='project-det'>
            <h1>{oneProject?.title}</h1>
            <p>
                {oneProject?.desc}
            </p>
            <div className='project-images'>
                {oneProject?.images?.map((e) => <img src={e} />)}
            </div>
        </div>
    )
}

export default ViewProject
