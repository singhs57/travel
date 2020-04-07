import React from 'react';
import {Link} from "react-router-dom";
import './Logout.css';

class Logout extends React.Component{
render(){
return(
  <div className='img'>
    <h1 className='h1'>You have been Logged Out !!!!</h1>        
    <button className='logout'>        
    <Link to="/">Pls Login Again</Link>        
    </button>  
     </div>
);
}
}
export default Logout;


