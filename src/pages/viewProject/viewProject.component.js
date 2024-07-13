import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import './viewProject.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

const ViewProject = (props) => {
    const [oneProject, setOneProject] = useState(null);
    const id = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const currentProject =
            props.projects.find((p) => p.key === id.id) || null;
        setOneProject(currentProject);
        console.log(currentProject);
    }, [oneProject, props, id.id]);
    const backAction = () => {
        navigate("/");
    }
    return (
        <div className='project-det'>
            <div className='project-header'>
                <FontAwesomeIcon cursor={true} icon={faArrowLeftLong} size='4x' onClick={backAction} />
                <h1>{oneProject?.title}</h1>
            </div>
            <p>
                {oneProject?.desc}
            </p>
            <div className='project-images'>
                {oneProject?.images?.map((e, index) => <img key={index} src={e} alt='project-image' />)}
            </div>
        </div>
    )
}

export default ViewProject
