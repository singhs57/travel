import React from 'react';
import './Carddetails.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
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
            <div>
                <h1>Popular Destination</h1>
            <p>TRAVELS4U brings you the best opportunity to enjoy holiday at 
                different destinations across the world.</p>
            <div className='row'>
            <div className='column'>
            <Card className='card'>            
                    <CardMedia className='header1'
                    title='Labrador Puppies'>
                    </CardMedia>
                    <CardContent>
                        <h3>Beauty of Nature</h3>
                        <p>
                        Labrador Retrievers are very gentle dogs with family-friendly personalities.
                        
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
                    <CardMedia className='header2'
                    title='Labrador Puppies'>
                    </CardMedia>
                    <CardContent>
                        <h3>Beauty of Nature</h3>
                        <p>
                        Labrador Retrievers are very gentle dogs with family-friendly personalities.                        
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
                    <CardMedia className='header3'
                    title='Labrador Puppies'>
                    </CardMedia>
                    <CardContent>
                        <h3>Beauty of Nature</h3>
                        <p>
                        Labrador Retrievers are very gentle dogs with family-friendly personalities.
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
                    <CardMedia className='header4'
                    title='Labrador Puppies'>
                    </CardMedia>
                    <CardContent>
                        <h3>Beauty of Nature</h3>
                        <p>
                        Labrador Retrievers are very gentle dogs with family-friendly personalities.
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