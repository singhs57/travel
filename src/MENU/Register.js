import React from 'react';
import {Redirect} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Register.css';
class Register extends React.Component{

  constructor(){
    super();
    this.state={
      open: false
    }
  this.handleOpen=this.handleOpen.bind(this);  
  }
  handleOpen(){
    this.setState({
      open:!this.state.open
    })
  }

  render(){
    if(this.state.open){
      return <Redirect to = "/Login"  />
    }
    return(
      <div className='Home1'>
        <button onClick={this.handleOpen}> Register Here </button>
      </div>
    )
  }

}
export default Register;