import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './About.css';
import Ourteam from '../Ourteam';
import Header from '../Header/Header';

class About extends Component{
render(){
    return(
        <div>
            <Header/>
        <div className='About-imag'>
        </div>
        <Ourteam/>
        </div>
    )
}
}
export default About;