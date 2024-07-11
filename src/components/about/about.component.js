import React from 'react'
import "./about.css"
import starImage from "../../assets/images/star.svg"

const About = () => {
    return (
        <div className="home" id='about'>
            <div className='home-content'>
                <img src={starImage} alt="star-image" class="right-img" />
                <h1>Meera Iyad</h1>
                <h5>Software Engineer & Full Stack Developer</h5>
                <img src={starImage} alt="star-image" class="left-img" />
            </div>
        </div>
    )
}

export default About