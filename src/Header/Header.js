import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitterSquare, faFacebook, faGooglePlus, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Header.css';
import {faPhoneAlt, faEnvelope, faSearch} from '@fortawesome/free-solid-svg-icons'


const Header = (props) => {
    
    const[search,setSearch]=useState(false);

    // const[searchNav,setSearchNav]=useState(false);
    
    const submitSearch = (e)=>{
        e.preventDefault();
        alert('Search Successful');      
         };

    const openSearch=()=>{
        setSearch(true);
    }  

    // const openNav=()=>{
    //     setSearchNav(true);
    // }
    
    // const searchHeader=searchNav?'header ul li': 'toggle-nav'
    
    const searchClass=search?'searchInput active': 'searchInput'
    return(
        <header>
            
            <nav className='header'>
            <div className='social'>               
        <ul>
            <li><a href='/Home'><FontAwesomeIcon icon={faFacebook} title='Facebook'/></a></li>  
            <li><a href='/Home'><FontAwesomeIcon icon={faYoutube} title='Youtube'/></a></li>
            <li><a href='/Home'><FontAwesomeIcon icon={faTwitterSquare} title='Twitter'/></a></li>
            <li><a href='/Home'><FontAwesomeIcon icon={faGooglePlus} title='Google Plus'/></a></li>
            <li><a href='/Home'><FontAwesomeIcon icon={faLinkedinIn} title='LinkedIn'/></a></li>
        </ul>
        </div>
            </nav>
            <nav className='header'>
            <a href='#' className='toggle-nav'>&#9776;</a>    
        <ul>  
        <div>
        <form onSubmit={submitSearch}>
        <input type='text' className={searchClass} id='inputBar' placeholder='Search'/>&nbsp;
        <FontAwesomeIcon className='awesomeIcon' icon={faSearch} onClick={openSearch}/>
        </form>
        </div>              
        <li><a href = "/Home" className='active'> Home</a></li>
        <li> <a href = "/About"> About</a></li>  
        <li><a href = "/Contact">Contact</a></li>
        <li><a href = "/Contact"> Gallery</a></li>
        <li><a href = "/Contact"> Feedback</a></li>
        <li><a href = "/Contact"> Event</a></li>
        </ul>  
        
            </nav>
        </header>
    )

}
export default Header;