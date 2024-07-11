import React from 'react'
import './contact.css'


const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <div className='message'>
                <h3>
                    Available for select freelance opportunities
                </h3>
                <div>
                    <p>
                        Have an exciting project you need help with?
                    </p>
                    <p>
                        Send me an email or contact me via instant message!
                    </p>
                </div>
            </div>
            <div className='links'>
                <a href='mailto: meeraiyad98@gmail.com'><span>meeraiyad98@gmail.com</span></a>
                <a href='https://www.linkedin.com/in/meera-qunaibi-8a53601b4/'>LinkedIn</a>
                <a href='https://github.com/meeraqunaibi'>Github</a>
            </div>
        </div>
    )
}

export default Contact