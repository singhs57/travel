import React from 'react';
import { Slide } from 'react-slideshow-image';
// import img1 from './img1.jpeg';
// import img2 from './img2.jpeg';
// import img5 from './img5.jpeg';
// import img4 from './img4.jpg';
import './Slideshow.css';


const slideImages = [
    'https://images-na.ssl-images-amazon.com/images/I/61zB3h2Z7ZL._AC_SX466_.jpg',
    'https://images6.alphacoders.com/685/685218.jpg',
    'https://friendlystock.com/wp-content/uploads/2018/08/7-tropical-beach-with-serene-waters-background-cartoon-clipart.jpg',
    'https://media.istockphoto.com/illustrations/beautiful-tropical-sunset-night-sky-sea-landscape-wallpaper-design-illustration-id1069674106?k=6&m=1069674106&s=170667a&w=0&h=D_hoRi4dqZra2tDIm72hMHdI-JiB5-p4NOV3kED21cw=',
    'https://www.glamvel.com/wp-content/uploads/2017/01/desert-safari-dubai-quote.jpg'
  ];

const properties = {
  duration: 5000,
  transitionDuration: 700,
  infinite: true,
  indicators: true,
  arrows: true
}

const Slideshow = () => {
    return (
    <div className='slide'>
        <Slide {...properties} >
        
        <div style={{'backgroundImage': `url(${slideImages[0]})`}} className='imge'>
              <span>“People don't take trips, trips take people.”</span>
            </div>
        <div style={{'backgroundImage': `url(${slideImages[1]})`}} className='imge'>
              <span>"Don't Quit Your Day Dream."</span>
            </div>
        <div style={{'backgroundImage': `url(${slideImages[2]})`}} className='imge'>
              <span>“LIFE IS EITHER A DARING ADVENTURE OR NOTHING AT ALL”</span>
            </div>    
        <div style={{'backgroundImage': `url(${slideImages[3]})`}} className='imge'>
              <span>“TAKE ONLY MEMORIES, LEAVE ONLY FOOTPRINTS”</span>
            </div>    
        <div style={{'backgroundImage': `url(${slideImages[4]})`}} className='imge'>
              <span>“Life with limited lifespan”</span>
            </div>      
        </Slide>

    </div>
    )
}
export default Slideshow;