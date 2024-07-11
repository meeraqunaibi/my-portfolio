import React from 'react'
import "./expertise.css"
import displayImage from "../../assets/images/display.svg"
import nodeImage from "../../assets/images/node.svg"
import reactImage from "../../assets/images/react.svg"


const Expertise = () => {
    const expertise = [
        {
            "header": "Software Development",
            "content": "Skilled in developing web applications using JavaScript and TypeScript, with hands-on experience gained through various projects over the last three years.",
            "logo": displayImage

        },
        {
            "header": "Frontend Development (React)",
            "content": "Passionate in building user-friendly front-end interfaces with React, HTML, CSS, and JavaScript, ensuring intuitive designs and clean code.",
            "logo": reactImage

        },
        {
            "header": "Backend Development (NodeJs, NestJS)",
            "content": "Capable of developing back-end systems using NestJS and Node.js, focusing on efficient performance and maintainable code.",
            "logo": nodeImage

        },

    ]
    return (
        <div className="expertise" id='expertise'>
            <h1>My Expertise</h1>
            <div className="tech-cards">
                {expertise.map((card, index) =>
                    <div key={index} className="card">
                        <div className="card-header">
                            <img src={card.logo} alt="logo" />
                            <h5>{card.header}</h5>
                        </div>
                        <div className="card-content">
                            <span>&lt;h3&gt;</span>
                            <p>{card.content}</p>
                            <span>&lt;/h3&gt;</span>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default Expertise