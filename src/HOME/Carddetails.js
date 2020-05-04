import React from 'react';
import './Carddetails.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Dialog from './Dialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faShareAlt } from '@fortawesome/free-solid-svg-icons'
// import IconButton from '@material-ui/core/IconButton';
// import FavoriteIcon from '@material-ui/icons/Favorite';

class Carddetails extends React.Component{
    render(){
        return(
            <div className='whole-body-back'>
                <div className='destination-title'>
                <h1>Popular Destination</h1>
            <p><span title='Know More'><Link to='/Card'>TRAVELS4U</Link></span> brings you the best opportunity to enjoy holiday at 
                different destinations across the world.</p>
                </div>
            <div className='row'>
            <div className='column'>
            <Card className='card'>            
                    <CardMedia className='header1'
                    title='Fun & Food'>
                    </CardMedia>
                    <CardContent>
                        <h3>Fun & Food</h3>
                        <p>
                        The Fun N Food Village offers India's largest collection of Water slides 
                        and attractions for the toddler learning how to swim to the Water sports enthusiast seeking.                        
                        </p>
                    </CardContent>
                    <CardActionArea>
                    <CardActions> &nbsp; &nbsp;
                <Dialog/> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon icon={faBookmark}/>
        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon icon={faShareAlt}/>
                    </CardActions> 
            </CardActionArea>            
                </Card> 
                </div>
                <div className='column'>
            <Card className='card'>            
                    <CardMedia className='header2'>
                    </CardMedia>
                    <CardContent>
                        <h3>Luxury Hotels</h3>
                        <p>
                        The Fun N Food Village offers India's largest collection of Water slides 
                        and attractions for the toddler learning how to swim to the Water sports enthusiast seeking.                        
                        </p>
                    </CardContent>
                    <CardActionArea>
                    <CardActions> &nbsp; &nbsp;
                <Dialog/> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon icon={faBookmark}/>
        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon icon={faShareAlt}/>
                    </CardActions> 
            </CardActionArea>
            
                </Card> 
                   </div>

                   <div className='column'>
            <Card className='card'>            
                    <CardMedia className='header3'>
                    </CardMedia>
                    <CardContent>
                        <h3>Beautiful Resort</h3>
                        <p>
                        The Fun N Food Village offers India's largest collection of Water slides 
                        and attractions for the toddler learning how to swim to the Water sports enthusiast seeking..
                        </p>
                    </CardContent>
                    <CardActionArea>
                    <CardActions> &nbsp; &nbsp;
                <Dialog/> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon icon={faBookmark}/>
        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon icon={faShareAlt}/>
                    </CardActions> 
            </CardActionArea>
            
                </Card> 
                   </div> 

                   <div className='column'>
            <Card className='card'>            
                    <CardMedia className='header4'>
                    </CardMedia>
                    <CardContent>
                        <h3>Massage Parlour</h3>
                        <p>
                        The Fun N Food Village offers India's largest collection of Water slides 
                        and attractions for the toddler learning how to swim to the Water sports enthusiast seeking.
                        </p>
                    </CardContent>
                    <CardActionArea>
                    <CardActions> &nbsp; &nbsp;
                <Dialog/> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon icon={faBookmark}/>
        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon icon={faShareAlt}/>
                    </CardActions> 
            </CardActionArea>
            
                </Card> 
                   </div> 
                   </div> 
                   </div>             
        );
    }
}
export default Carddetails;