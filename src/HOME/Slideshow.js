import React from 'react';
import { Slide } from 'react-slideshow-image';
// import img1 from './img1.jpeg';
// import img2 from './img2.jpeg';
// import img5 from './img5.jpeg';
// import img4 from './img4.jpg';
import './Slideshow.css';




// const properties = {
//   duration: 5000,
//   transitionDuration: 700,
//   infinite: true,
//   indicators: true,
//   arrows: true
// }

const Slideshow = () => {
    return (
    // <div className='slide'>
    //     <Slide {...properties} >
        
    //     <div style={{'backgroundImage': `url(${slideImages[0]})`}} className='imge'>
    //                </div>
    //     <div style={{'backgroundImage': `url(${slideImages[1]})`}} className='imge'>
    //           <span></span>
    //         </div>
    //     <div style={{'backgroundImage': `url(${slideImages[2]})`}} className='imge'>
    //           <span></span>
    //         </div>    
    //     <div style={{'backgroundImage': `url(${slideImages[3]})`}} className='imge'>
    //           <span></span>
    //         </div>    
    //     <div style={{'backgroundImage': `url(${slideImages[4]})`}} className='imge'>
    //           <span></span>
    //         </div>      
    //     </Slide>

    // </div>
    
    <div className='container'>
      
      <div className='slider' >
      <div className='slide slide1'>
        <div className='caption'>
          <h2>“People don't take trips,trips take people.”</h2>
          <p>The University of Hawaii began using radio to send digital information as early as 1971, using ALOHAnet
            [citation needed] Friedhelm Hillebrand conceptualised SMS in 1984 while working for Deutsche Telekom. 
            Sitting at a typewriter at home, Hillebrand typed out random sentences and counted every letter, number, 
            punctuation, and space.</p>
            <button>Read More</button>
        </div>
        </div>

      <div className='slide slide2'>
        <div className='caption'>
          <h2>"Don't Quit Your Day Dream."</h2>
          <p>The University of Hawaii began using radio to send digital information as early as 1971, using ALOHAnet
            [citation needed] Friedhelm Hillebrand conceptualised SMS in 1984 while working for Deutsche Telekom. 
            Sitting at a typewriter at home, Hillebrand typed out random sentences and counted every letter, number, 
            punctuation, and space.</p>
        </div>
      </div>

      <div className='slide slide3'>
        <div className='caption'>
          <h2>“LIFE IS EITHER A DARING ADVENTURE OR NOTHING AT ALL”</h2>
          <p>The University of Hawaii began using radio to send digital information as early as 1971, using ALOHAnet
            [citation needed] Friedhelm Hillebrand conceptualised SMS in 1984 while working for Deutsche Telekom. 
            Sitting at a typewriter at home, Hillebrand typed out random sentences and counted every letter, number, 
            punctuation, and space.</p>
        </div>
      </div>

      <div className='slide slide4'>
        <div className='caption'>
          <h2>“TAKE ONLY MEMORIES, LEAVE ONLY FOOTPRINTS”</h2>
          <p>The University of Hawaii began using radio to send digital information as early as 1971, using ALOHAnet
            [citation needed] Friedhelm Hillebrand conceptualised SMS in 1984 while working for Deutsche Telekom. 
            Sitting at a typewriter at home, Hillebrand typed out random sentences and counted every letter, number, 
            punctuation, and space.</p>
        </div>
      </div>

      <div className='slide slide5'>
        <div className='caption'>
          <h2>“Life with limited lifespan”</h2>
          <p>The University of Hawaii began using radio to send digital information as early as 1971, using ALOHAnet
            [citation needed] Friedhelm Hillebrand conceptualised SMS in 1984 while working for Deutsche Telekom. 
            Sitting at a typewriter at home, Hillebrand typed out random sentences and counted every letter, number, 
            punctuation, and space.</p>
        </div>
      </div>

      </div>      
    </div>
    
    )
}
export default Slideshow;