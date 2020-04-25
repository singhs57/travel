import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './About.css';
import Ourservices from '../Ourteam';
import Ourteam from '../Ourteam';

class About extends Component{
render(){
    return(
        <div>
        <div className='About-imag'>
        </div>
        <Ourteam/>
        </div>
    )
}
}
export default About;