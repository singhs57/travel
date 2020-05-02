import React from 'react'
import './Ourservices.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngellist } from '@fortawesome/free-brands-svg-icons'
import { faAnchor, faAppleAlt, faArchway, faAngry, faRobot, faSmile } from '@fortawesome/free-solid-svg-icons';


const Ourservices = (props) => {
  return(
    <div className='services'>
        <h1>Our Services</h1>
        <p>Know about our services for better results...!</p>
        <div className='cen'>
            <div className='service'>
            <i><FontAwesomeIcon icon={faAnchor} title='Facebook'/></i>
            <h2>Design</h2>
            <p>Component that renders a media (image/video) gallery slider/carousel. ... 
                When set to true activates a swipe touch effect to navigate on mobile devices. ...
                 </p>
            </div>

            <div className='service'>
            <i><FontAwesomeIcon icon={faRobot} title='Facebook'/></i>
            <h2>Edit Texts</h2>
            <p>Component that renders a media (image/video) gallery slider/carousel. ... 
                When set to true activates a swipe touch effect to navigate on mobile devices. ...
                 </p>
            </div>

            <div className='service'>
            <i><FontAwesomeIcon icon={faAngellist} title='Facebook'/></i>
            <h2>Build Website</h2>
            <p>Component that renders a media (image/video) gallery slider/carousel. ... 
                When set to true activates a swipe touch effect to navigate on mobile devices. ...
                 </p>
            </div>

            <div className='service'>
            <i><FontAwesomeIcon icon={faAppleAlt} title='Facebook'/></i>
            <h2>Manage Databases</h2>
            <p>Component that renders a media (image/video) gallery slider/carousel. ... 
                When set to true activates a swipe touch effect to navigate on mobile devices. ...
                 </p>
            </div>

            <div className='service'>
            <i><FontAwesomeIcon icon={faSmile} title='Facebook'/></i>
            <h2>Click to Chat</h2>
            <p>Component that renders a media (image/video) gallery slider/carousel. ... 
                When set to true activates a swipe touch effect to navigate on mobile devices. ...
                 </p>
            </div>

            <div className='service'>
            <i><FontAwesomeIcon icon={faArchway} title='Facebook'/></i>
            <h2>Support</h2>
            <p>Component that renders a media (image/video) gallery slider/carousel. ... 
                When set to true activates a swipe touch effect to navigate on mobile devices. ...
                 </p>
            </div>
        </div>
    </div>
   )

 }

export default Ourservices;