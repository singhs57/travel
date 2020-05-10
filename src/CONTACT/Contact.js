import React, { Component } from 'react';
import './Contact.css';
import Header from '../Header/Header';
//import Form from './Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare,faPhoneAlt, faMapMarker } from '@fortawesome/free-solid-svg-icons';

class Contact extends Component{
render(){
    return(
        <div id='contact-section'>
            
        
        <div className='contact-contain'>
        <h1>Contact Us</h1>
        <p>Email us and keep upto date with our latest news</p>
        <div className='conatact-fom'>
            <div>
        <i><FontAwesomeIcon icon={faMapMarker}/></i> <span className='con-info'>70 Telco Jamshedpur India, 831016</span> <br/>
        <i><FontAwesomeIcon icon={faPhoneAlt}/></i> <span className='con-info'>Phone no +91 8092290510</span> <br/>
        <i><FontAwesomeIcon icon={faEnvelopeSquare}/></i> <span className='con-info'>57shubhamkrsingh@gmail.com</span> <br/>
        </div>

        <div>
            <form>
                <input className='input-con' type='text' placeholder='Your First name' required/>
                <input className='input-con' type='text' placeholder='Your Last name' required/>
                <input className='input-con' type='Email' placeholder='Your Email' required/>
                <input className='input-con' type='text' placeholder='Subject of this message' required/>
                <textarea className='input-con' name='message' placeholder='Message' rows='5' required/>
                <button className='sub-mit-but'>Send Message</button>
            </form>
        </div>
        </div>
        </div>
            </div>
    )
}
}
export default Contact;