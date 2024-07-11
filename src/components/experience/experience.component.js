import React, { useState } from 'react'
import "./experience.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMinus, faPlus, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import vastLogo from "../../assets/images/vast_lab_logo.svg";
import manaraLogo from "../../assets/images/manara_logo.svg";
import geeksLogo from "../../assets/images/geeks.svg";

const Experience = () => {
    const experiences = [
        {
            "id": "164",
            "title": "The Vast Lab",
            "year": "2023-2024",
            "location": "Hebron, Palestine",
            "website": "https://vast.ps/",
            "details": "Participated in Agile methodology by attending daily scrum meetings, conducting code reviews, and ensuring compliance with coding standards on various projects.",
            "tech": ["Typescript", "NestJs", "NodeJs", "Postman", "MongoDB", "Git"],
            "logo": vastLogo
        },
        {
            "id": "134",
            "title": "Manara Training Program - AKAT",
            "year": "2023",
            "location": "Remotely",
            "website": "https://manara.tech/about-us",
            "details": "Comprehensive four-month training program with Manara, enhancing both technical prowess through full-stack courses and honing soft skills through behavioral interviews Embracing a fantastic opportunity to grow as a well-rounded professional.",
            "tech": ["ReactJs", "NodeJs", "HTML", "CSS", "Javascript"],
            "logo": manaraLogo

        },
        {
            "id": "274",
            "title": "Gaza Sky Geeks",
            "year": "2022-2023",
            "location": "Hebron, Palestine",
            "website": "https://gazaskygeeks.com/",
            "details": "With 500 hours of training, we developed multiple websites and received training in both technical skills such as front-end using React.js, as well as soft skills such as communication and teamwork.",
            "tech": ["HTML", "CSS", "Sass", "Javascript", "ReactJs"],
            "logo": geeksLogo

        },
    ]
    const [item, setItem] = useState(null);

    const handleClick = (element) => {
        if (item === element.id) {
            setItem(null);
        } else {
            setItem(element.id);
        }
    };
    return (
        <div className="experience" id='experience'>
            <h1>Professional Experience</h1>
            <div className='exp-wrapper'>
                {experiences.map((element, index) =>
                    <div key={index} className='exp'>
                        <div className='exp-header'>
                            <span>{element.title}</span>
                            <div>
                                <span>{element.year}</span>
                                <FontAwesomeIcon cursor="pointer" icon={item === element.id ? faPlus : faMinus} onClick={() => handleClick(element)} />
                            </div>
                        </div>
                        {item == element.id && <div className="exp-content">
                            <div>
                                <div className='loc'>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    &nbsp;{element.location}&nbsp;
                                    <FontAwesomeIcon icon={faSquareArrowUpRight} />
                                    &nbsp;<a href={element.website}>{element.title}</a>&nbsp;
                                </div>
                                <p className='details'>{element.details}</p>
                                <div className='tech'>
                                    {element.tech.map((e, index) => <span key={index}>{e}</span>)}
                                </div>
                            </div>
                            <div>
                                <img src={element.logo} alt='logo' style={{ padding: "10px" }} />
                            </div>
                        </div>}
                    </div>)}
            </div>
        </div>
    )
}

export default Experience