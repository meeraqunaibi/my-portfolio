import React from 'react'
import About from '../../components/about/about.component'
import Expertise from '../../components/expertise/expertise.component'
import "./home.css";
import Work from '../../components/work/work.component';
import Experience from '../../components/experience/experience.component';
import Contact from '../../components/contact/contact.component';

const Home = ({projects}) => {
    return (
        <div className='container'>
            <About />
            <Expertise />
            <Work projects={projects} />
            <Experience />
            <Contact />
        </div>
    )
}

export default Home