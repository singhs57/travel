import React from 'react';
// import Button from '@material-ui/core/Button';
import './Popularpackages.css';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faRulerHorizontal} from '@fortawesome/free-solid-svg-icons'


const Popularpackages=()=> {
    
return(
    <div className='title-content'>
            <h1>Most Popular Packages</h1>
            <p>Wondering where to go for your next holidays?</p> 
            <p> Has sitting at home rummaging through the internet for the best holiday destinations...</p>
    
        <div className='container1'>            
            <div className='box'>
                <div className='imgBox'>
                {/* <img src={require('./image1.jpeg')} alt='Img'/> */}
                <img src ={'https://www.technocrazed.com/wp-content/uploads/2015/12/Paris-Wallpaper-background-15.jpg'} alt='Img' height='250' width='405'/>
                </div>
                <div className='content'>
                       <h2>Paris city Tour</h2>
                       <span></span>
                       <p>The giant mouse lemurs (genus Mirza) are primates native to Madagascar, 
                           like all other lemurs. The giant mouse lemurs (genus Mirza) are primates 
                           native to Madagascar, like all other lemurs.The giant mouse lemurs 
                           (genus Mirza) are primates native to Madagascar, like all other lemurs.</p>

                          <p> <Button variant="contained" color="primary"> View Packages </Button> </p>
                </div>
            </div>

             <div className='box'>
            <div className='imgBox'>
            {/* <img src={require('./image2.jpeg')} alt='Img'/> */}
            <img src ={'https://www.ecopetit.cat/wpic/mpic/156-1563818_statue-of-liberty.jpg'} alt='Img' height='250' width='405'/>
                </div>
                <div className='content'>
                       <h2>New York city Tour</h2>
                       <span></span>
                       <p>The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs. 
                           The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs.
                           The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs.</p>
                       <p> <Button variant="contained" color="primary"> View Packages </Button> </p>                
                </div>
            </div>

            <div className='box'>
            <div className='imgBox'>
            {/* <img src={require('./image3.jpeg')} alt='Img'/> */}
            <img src ={'https://i.pinimg.com/originals/36/92/2f/36922f749d435aada3078501a91edbe5.jpg'} alt='Img' height='250' width='405'/>
                </div>
                <div className='content'>
                       <h2>New Zealand</h2>
                       <span></span>
                       <p>The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs. The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs.The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs.</p>
                       <p> <Button variant="contained" color="primary"> View Packages </Button> </p> 
                </div>
            </div>

            <div className='box'>
            <div className='imgBox'>
            {/* <img src={require('./image4.jpeg')} alt='Img'/> */}
            <img src ={'https://www.wallpaperup.com/uploads/wallpapers/2014/01/13/225694/46fb357ff87f9c078427f55828619f82-700.jpg'} alt='Img' height='250' width='405'/>
                </div>
                <div className='content'>
                       <h2>Four Seasons America</h2>
                       <span></span>
                       <p>The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs. The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs.The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs.</p> 
                       <p> <Button variant="contained" color="primary"> View Packages </Button> </p> 
                </div>
            </div>

            <div className='box'>
            <div className='imgBox'>
            {/* <img src={require('./image5.jpeg')} alt='Img'/> */}
            <img src ={'https://s.itl.cat/pngfile/s/91-915763_incredible-india-taj-mahal.jpg'} alt='Img' height='250' width='405'/>
                </div>
                <div className='content'>
                       <h2>Incredible India</h2>
                       <span></span>
                       <p>The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs. The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs.The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs.</p>
                       <p> <Button variant="contained" color="primary"> View Packages </Button> </p> 
                </div>
            </div>

            <div className='box'>
            <div className='imgBox'>
            {/* <img src={require('./image6.jpeg')} alt='Img'/> */}
            <img src ={'https://cdn.pixabay.com/photo/2018/02/22/08/05/palma-3172367_1280.jpg'} alt='Img' height='250' width='405'/>
                </div>
                <div className='content'>
                       <h2>Amazing Australia</h2>
                       <span></span>
                       <p>The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs. The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs.The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs.</p>
                       <p> <Button variant="contained" color="primary"> View Packages </Button> </p> 
                </div>
            </div>  

        </div> 
        </div>
    );
}

export default Popularpackages;
