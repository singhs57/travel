import React from 'react'
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitterSquare, faFacebook,faYoutube } from '@fortawesome/free-brands-svg-icons';
import Header from '../../Header/Header';
import Footer from '../../FOOTER/Footer';



function Card(){

  const register = () => {

    if (
      document.getElementById('register') &&
      document.getElementById('login') &&
      document.getElementById('btn')
    ){
      document.getElementById("register").style.left = "50px";
      document.getElementById("login").style.left = "-400px";
      document.getElementById('btn').style.left = "110px";
    };
        // x.style.left='-400px';
        // y.style.left='50px';
        // z.style.left='110px';
  }

  const login = () => {
    if (
      document.getElementById('register') &&
      document.getElementById('login') &&
      document.getElementById('btn')
    ){
      document.getElementById("register").style.left = "450px";
      document.getElementById("login").style.left = "50px";
      document.getElementById('btn').style.left = "0px";
    }
    // x.style.left='-50px';
    // y.style.left='450px';
    // z.style.left='0px';
  }


  return(
    <div className='hero'>
      <Header/>
        <div className='form-box'>
          <div className='button-box'>
            <div id='btn'></div>
            <button type='button' className='toggle-btn' onClick={login}>Log In</button>
            <button type='button' className='toggle-btn' onClick={register}>Register</button>
          </div>
          <div className='social-icons'>
        <a><FontAwesomeIcon icon={faFacebook} title='Facebook'/></a>
        <a><FontAwesomeIcon icon={faYoutube} title='Youtube' /></a>
        <a><FontAwesomeIcon icon={faTwitterSquare} title='Twitter'/></a>
        </div>

        <form id='login' className='input-group'>
        <input type='text' className='input-field' placeholder='User Id' required/>
        <input type='password' className='input-field' placeholder='Password' required/>
        <input type='checkbox' className='check-box'></input> <span>Remember Password</span>
        <button type='submit' className='submit-btn'>Login</button>
        </form>

        <form id='register' className='input-group'>
        <input type='text' className='input-field' placeholder='User Id' required/>
        <input type='email' className='input-field' placeholder='Email Id' required/>
        <input type='password' className='input-field' placeholder='Enter Password' required/>
        <input type='checkbox' className='check-box'></input> <span>I agree to the terms & conditions</span>
        <button type='submit' className='submit-btn'>Register</button>
        </form>

        </div> 
        <Footer/>       
    </div>
   );

 }

export default Card;