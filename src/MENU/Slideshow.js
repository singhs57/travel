import React from 'react';
import { Slide } from 'react-slideshow-image';
import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img5 from './img5.jpeg';
import img4 from './img4.jpg';
import './Slideshow.css';

const properties = {
  duration: 3000,
  transitionDuration: 900,
  infinite: true,
  indicators: true,
  arrows: true
}

const Slideshow = () => {
    return (
    <div className='slide'>
        <Slide {...properties}>
            <div className='img'>
            <div>
                <img src={img1} alt='img1'/>
            </div>
            </div>

            <div className='img'>
            <div>
                <img src={img2} alt='img2'/>
            </div>
            </div>

            <div className='img'>
            <div>
                <img src={img5} alt='img5'/>
            </div>
            </div>

            <div className='img'>
            <div>
                <img src={img4} alt='img4'/>
            </div>
            </div>
        </Slide>

    </div>
    )
}
export default Slideshow;