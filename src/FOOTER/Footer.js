import React from 'react'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitterSquare, faFacebook, faYoutube, faGooglePlus } from '@fortawesome/free-brands-svg-icons'
import { faPhoneSquareAlt, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';
import Scrollup from '../HOME/Scrollup';



const Footer = (props) => {
  return(
    <div className='footer'>
        <div className='footer-newsletr'>
            <form action='index.html'>
            <h3>NEWSLETTER</h3>
            <h1>GET DISCOUNT 30% OFF</h1>
            <div className='email-box'>
            <i><FontAwesomeIcon icon={faEnvelopeSquare}/></i>
            <input className='e-box' type='email'  placeholder='Enter Your Email Address'/>
            <button className='b-box' type='button' name='button'>Subscribe</button>
            </div>
            </form>
        </div>

        <div className='footer-content'>
            <div className='footer-section aboutus'>
                <h1 className='logo-text'>TRAVELS4U</h1>
                <p>
                Donec ut ex ac nulla pellentesque mollis in a enim Suspendisse suscipit velit id ultricies auctor. 
                Duis turpis arcu, aliquet sed sollicitudin seduisque velit nibh.
                Donec ut ex ac nulla sapien mauris, vitae sodales tellus suspendisse suscipit velit id ultricies auctor.
                </p>
                <div className='contact-details'>
                   <span><i><FontAwesomeIcon icon={faPhoneSquareAlt}/></i>&nbsp;+91-1234567890</span> 
                   <span><i><FontAwesomeIcon icon={faEnvelopeSquare}/></i>&nbsp;info@travels4u.com</span> 
                </div>
                <div className='social-link'>
                <a href='/About'><FontAwesomeIcon icon={faFacebook} title='Facebook'/></a>
            <a href='/About'><FontAwesomeIcon icon={faYoutube} title='Youtube'/></a>
            <a href='/About'><FontAwesomeIcon icon={faTwitterSquare} title='Twitter'/></a>
            <a href='/About'><FontAwesomeIcon icon={faGooglePlus} title='Google Plus'/></a>
                </div>
            </div>


            <div className='footer-section links'>
                <h2>Quick Links</h2>
                <br/>
                <ul>
        <li> <a href = "/About"> About</a></li>  
        <li><a href = "/Contact"> Gallery</a></li>
        <li><a href = "/Contact"> Feedback</a></li>
        <li><a href = "/Contact"> Events</a></li>
        <li><a href = "/Contact"> Write for Us</a></li>
        <li><a href = "/Contact"> Terms and Conditions</a></li>
                </ul>
            </div>


            <div className='footer-section contact-form'>
            <h2>Contact Us</h2>
            <form action='index.html' method='post'>
<input type='email' name='email' className='text-input contact-input' placeholder='Your email address...'/>
<textarea name='message' className='text-input contact-input' placeholder='Your message...'/>
<button className='Contact-box' type='button' name='button'>
    <i><FontAwesomeIcon icon={faEnvelopeSquare}/></i>&nbsp;Send</button>
            </form>
            </div>
        </div>

        <div className='footer-bottom'>
        Copyright © 2020. All rights reserved | Designed by Shubham Singh
        <Scrollup/>
        </div>
    </div>
   )

 }

export default Footer;