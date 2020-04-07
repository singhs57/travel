import React from 'react';
// import Button from '@material-ui/core/Button';
import './Sidemenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faTimesCircle } from '@fortawesome/free-solid-svg-icons';
// import { Link } from "react-router-dom";

function Sidemenu(){
    // const [open, setOpen] = React.useState(false);

    const openNav = () => {
        document.getElementById('mySidenav').style.width='250px';
        // setOpen(true);
      };
    
    const closeNav = () => {
        document.getElementById('mySidenav').style.width='0px';
      };
      
return(
    <body>
    <header>
        <div>
            <span>
            <FontAwesomeIcon className='icon' icon={faBars} title='Explore More' onClick={openNav}/>              
            </span>
        </div>
    </header>
        <div className='sidenav' id='mySidenav'>
        <FontAwesomeIcon className='closebtn' icon={faTimesCircle} title='Click to close' onClick={closeNav}/> 
        <a href="/Home">Home</a>
        <a href="/Contact">Contact</a>
        <a href="/About">About</a> 
        <a href = "/Logout" title='Click to Logout'>Logout</a>
        </div>
    </body>
);
}
export default Sidemenu;





