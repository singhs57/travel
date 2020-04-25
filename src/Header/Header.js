import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitterSquare, faFacebook, faGooglePlus, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Header.css';
import {faPhoneAlt, faEnvelope, faSearch} from '@fortawesome/free-solid-svg-icons'



const Header = (props) => {
    
    const[search,setSearch]=useState(false);
    
    const submitSearch = (e)=>{
        e.preventDefault();
        alert('Search Successful');      
         };

    const openSearch=()=>{
        setSearch(true);
    }  
    
    const searchClass=search?'searchInput active': 'searchInput'
    return(
            <header> 
                <nav className='header'>               
        <div className='social'>             
        <ul> 
        <div className='mylogo'>TRAVELS4U
            <div className='toggle-nav'>&#9776;</div>
            </div>
                                     
            <li><a href='/About'><FontAwesomeIcon icon={faFacebook} title='Facebook'/></a></li>  
            <li><a href='/About'><FontAwesomeIcon icon={faYoutube} title='Youtube'/></a></li>
            <li><a href='/About'><FontAwesomeIcon icon={faTwitterSquare} title='Twitter'/></a></li>
            <li><a href='/About'><FontAwesomeIcon icon={faGooglePlus} title='Google Plus'/></a></li>
            <li><a href='/About'><FontAwesomeIcon icon={faLinkedinIn} title='LinkedIn'/></a></li>
            
        {/* <li>
        <form onSubmit={submitSearch} className='item-search'>
        <input type='text' className={searchClass} id='inputBar' placeholder='Search'/>&nbsp;
        <FontAwesomeIcon className='awesomeIcon' icon={faSearch} onClick={openSearch}/>
        </form>
        </li>                    */}
        </ul>
        </div>
                  
            <ul> 
                        
        <li><a href = "/" className='active'> Home</a></li>
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