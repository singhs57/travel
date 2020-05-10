import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitterSquare, faFacebook, faGooglePlus, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Header.css';
import { Link } from 'react-router-dom';
import { faPhoneAlt, faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons'



const Header = (props) => {

    const [search, setSearch] = useState(false);

    const submitSearch = (e) => {
        e.preventDefault();
        alert('Search Successful');
    };

    const openSearch = () => {
        setSearch(true);
    }

    const searchClass = search ? 'searchInput active' : 'searchInput'
    return (
        <header>
            <nav className='header'>
                <div className='social'>
                    <ul>
                        <div className='mylogo'>TRAVELS4U<div className='toggle-nav'>&#9776;</div>
                        </div>

                        <li><Link to='/About'><FontAwesomeIcon icon={faFacebook} title='Facebook' /></Link></li>
                        <li><Link to='/About'><FontAwesomeIcon icon={faYoutube} title='Youtube' /></Link></li>
                        <li><Link to='/About'><FontAwesomeIcon icon={faTwitterSquare} title='Twitter' /></Link></li>
                        <li><Link to='/About'><FontAwesomeIcon icon={faGooglePlus} title='Google Plus' /></Link></li>
                        <li><Link to='/About'><FontAwesomeIcon icon={faLinkedinIn} title='LinkedIn' /></Link></li>

                        {/* <li>
        <form onSubmit={submitSearch} className='item-search'>
        <input type='text' className={searchClass} id='inputBar' placeholder='Search'/>&nbsp;
        <FontAwesomeIcon className='awesomeIcon' icon={faSearch} onClick={openSearch}/>
        </form>
        </li>                    */}
                    </ul>
                </div>
                <ul>

                    <li><Link to="/" exact className='active'> Home</Link></li>
                    <li> <Link to="/About"> About</Link></li>
                    <li><Link to="/Gallery"> Gallery</Link></li>
                    <li><Link to="/Achivements"> Achivements</Link></li>
                    <li><Link to="/Contact"> Event</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    
                </ul>
            </nav>


        </header>
    )

}
export default Header;