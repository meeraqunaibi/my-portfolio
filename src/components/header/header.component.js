import React, { useState } from 'react'
import "./header.css"
import { Button, Drawer } from 'antd';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <nav>
            <div class="nav-container">
                <div className='nav-menu'>
                    <span>MeeraIyad._</span>
                    <ul className='nav-list'>
                        <li className='nav-item'><a href="#about">// Home</a></li>
                        <li className='nav-item'><a href="#expertise">// Expertise</a></li>
                        <li className='nav-item'><a href="#work">// Work</a></li>
                        <li className='nav-item'><a href="#experience">// Experience</a></li>
                        <li className='nav-item'><a href="#contact">// Contact</a></li>
                    </ul>
                </div>

                <FontAwesomeIcon className='drawer' icon={faBars} onClick={showDrawer} />
                <Drawer
                    className='drawer-content'
                    title="Basic Drawer"
                    placement='left'
                    closable={false}
                    onClose={onClose}
                    open={open}
                >
                    <ul>
                        <li className='nav-item'><a href="#about" onClick={onClose}>// Home</a></li>
                        <li className='nav-item'><a href="#expertise" onClick={onClose}>// Expertise</a></li>
                        <li className='nav-item'><a href="#work" onClick={onClose}>// Work</a></li>
                        <li className='nav-item'><a href="#experience" onClick={onClose}>// Experience</a></li>
                        <li className='nav-item'><a href="#contact" onClick={onClose}>// Contact</a></li>
                    </ul>
                    <p>© 2021. Made with passion by Meera Iyad.
                        All right reserved.</p>
                </Drawer>
            </div>
        </nav>
    )
}

export default Header