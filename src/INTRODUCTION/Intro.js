import React from 'react'
import './Intro.css';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const Intro = (props) => {
  return(
    <div className='intro-pic'>  
    <div className='img-col'>
          <img src={'https://www.elsetge.cat/myimg/f/218-2189736_family-wallpapers-background.jpg'} alt='pic' width='400' height='300'/>
          </div>
        <div className='intro-text'>
            <h1>Welcome to TRAVELS4U Zone!</h1>
            <p>Lorem ipsum dolor sit amet placerat facilisis felis miin sit amet placerat facilisis felis tempus. 
                Eleifend pellentesque natoque faucibus magna felis miin tempusut etiam felis mi in tempus. 
                Eleifend pellentesque natoque faucibus magna felis Eleifend pellentesque 
                Lorem ipsum dolor sit amet placerat facilisis felis miin sit amet placerat facilisis felis tempus.</p>
            <div className='intro-but'>
              <Button variant="contained" color="primary"><Link to ='/Card'>Read More</Link></Button>
            </div>

               
        </div>
    </div>
   )

 }

export default Intro;