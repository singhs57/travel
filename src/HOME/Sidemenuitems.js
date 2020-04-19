import React from 'react';
// import Button from '@material-ui/core/Button';
import './Sidemenuitems.css';
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faRulerHorizontal} from '@fortawesome/free-solid-svg-icons'


const Sidemenuitems=()=> {
    
return(
        <div className='container1'>
            <div className='box'>
                <div className='imgBox'>
                <img src={require('./image1.jpeg')} alt='Img'/>
                </div>
                <div className='content'>
                       <h2>Paris city Tour</h2>
                       <span></span>
                       <p>The giant mouse lemurs (genus Mirza) are primates native to Madagascar, 
                           like all other lemurs. The giant mouse lemurs (genus Mirza) are primates 
                           native to Madagascar, like all other lemurs.The giant mouse lemurs 
                           (genus Mirza) are primates native to Madagascar, like all other lemurs.</p>
                </div>
            </div>

             <div className='box'>
            <div className='imgBox'>
            <img src={require('./image2.jpeg')} alt='Img'/>
                </div>
                <div className='content'>
                       <h2>New York city Tour</h2>
                       <span></span>
                       <p>The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs. The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs.The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs.</p>
                </div>
            </div>

            <div className='box'>
            <div className='imgBox'>
            <img src={require('./image3.jpeg')} alt='Img'/>
                </div>
                <div className='content'>
                       <h2>New Zealand</h2>
                       <span></span>
                       <p>The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs. The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs.The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs.</p>
                </div>
            </div>

            <div className='box'>
            <div className='imgBox'>
            <img src={require('./image4.jpeg')} alt='Img'/>
                </div>
                <div className='content'>
                       <h2>Four Seasons America</h2>
                       <span></span>
                       <p>The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs. The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs.The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs.</p> 
                </div>
            </div>

            <div className='box'>
            <div className='imgBox'>
            <img src={require('./image5.jpeg')} alt='Img'/>
                </div>
                <div className='content'>
                       <h2>Incredible India</h2>
                       <span></span>
                       <p>The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs. The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs.The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs.</p>
                </div>
            </div>

            <div className='box'>
            <div className='imgBox'>
            <img src={require('./image6.jpeg')} alt='Img'/>
                </div>
                <div className='content'>
                       <h2>Amazing Australia</h2>
                       <span></span>
                       <p>The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs. The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs.The giant mouse lemurs (genus Mirza) are primates native to Madagascar, like all other lemurs.</p>
                </div>
            </div>  

        </div> 
    );
}

export default Sidemenuitems;
