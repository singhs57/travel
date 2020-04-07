import React from 'react';
import './Login.css';
import {Redirect} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faKeyboard, faEye } from '@fortawesome/free-solid-svg-icons'
import Grid from '@material-ui/core/Grid';  

class Login extends React.Component{
    constructor(props){
        super(props);
        let loggedIn = false
        
        this.state={
                firstname:'',
                lastname:'',
                email:'',
                number:'',
                username:'',
                password:'',
                error:'',
                loggedIn,
                hidden: true
        };
    this.viewPassword=this.viewPassword.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleFirstChange = this.handleFirstChange.bind(this);
    this.handleLastChange = this.handleLastChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleContactChange = this.handleContactChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
    }
    viewPassword(evt){      
      this.setState({
        hidden: !this.state.hidden
      })    
    }

      dismissError() {
        this.setState({ error: '' });
      }
    
      handleSubmit(evt) {
        evt.preventDefault();

        if (!this.state.firstname) {
          return this.setState({ error: 'Firstname is required' });
        }
        if (!this.state.lastname) {
          return this.setState({ error: 'Lastname is required' });
        }
        if (!this.state.email) {
          return this.setState({ error: 'Email is required' });
        }
        if (!this.state.number) {
          return this.setState({ error: 'Number is required' });
        }
    
        if (!this.state.username) {
          return this.setState({ error: 'Username is required' });
        }
    
        if (!this.state.password) {
          return this.setState({ error: 'Password is required' });
        }
        if (this.state.username === "User" && this.state.password ==="000"){
          this.setState({
            loggedIn: true
          })
        }
    
        return this.setState({ error: '' });
      }
      handleFirstChange(evt) {
        this.setState({
         firstname: evt.target.value,
        });        
      }
      handleLastChange(evt) {
        this.setState({
         lastname: evt.target.value,
        });
      }
      handleEmailChange(evt) {
        this.setState({
         email: evt.target.value,
        });
      }
      handleContactChange(evt) {
        this.setState({
         number: evt.target.value,
        });
      }
    
      handleUserChange(evt) {
        this.setState({
         username: evt.target.value,
        });
        
      }

      handlePassChange(evt) {
        this.setState({
          password: evt.target.value,
        });
      }
    
    render(){
      if (this.state.loggedIn){
        return <Redirect to = "/"  />
      }
        return(
          <div className='body'>
          
          <form  className='form' onSubmit={this.handleSubmit}>          
          <p className='sign' align="center">Register</p>
          
          <div className='input'>
          <Grid container spacing={0}>
          <Grid item xs={6}> 
          <label className='userfont'><h3>First Name</h3></label>          
          <input type='text' value={this.state.firstname} 
          placeholder='First Name' onChange={this.handleFirstChange}></input>
          </Grid>
          <Grid item xs={6}>
          <label className='userfont'><h3>Last Name</h3></label>
          <input type='text' value={this.state.lastname} 
          placeholder='Last Name' onChange={this.handleLastChange}></input>
          </Grid>
          <Grid item xs={6}>
          <label className='userfont'><h3>Email</h3></label>
          <input type='text' name='email' value={this.state.email} 
          placeholder='Enter Your Email' onChange={this.handleEmailChange}></input>
          </Grid>
          <Grid item xs={6}>
          <label className='userfont'><h3>Contact Detail</h3></label>
          <input type='text' name='number' value={this.state.number} 
          placeholder='Contact Detail' onChange={this.handleContactChange}></input>
          </Grid>
          <Grid item xs={6}>
          <label className='userfont'><h3>User Name</h3></label>
          <FontAwesomeIcon  className='iconuser' icon={faUsers}/>
          < input type="text" data-test="username" value={this.state.username} 
          placeholder='User Name' onChange={this.handleUserChange} />
          </Grid>
          <Grid item xs={6}>
          <label className='userfont'><h3>Password</h3></label>           
          <FontAwesomeIcon className='iconkey' icon={faKeyboard}/>   
          <input type={this.state.hidden ? "password" : "text"} value={this.state.password} 
          placeholder='Password' onChange={this.handlePassChange}/>
          <FontAwesomeIcon className='eye' onClick={this.viewPassword} icon={faEye}/>
          </Grid>
          <Grid item xs={12}>
          {
            this.state.error &&
            <h4 className='font' data-test="error" onClick={this.dismissError}>
              {this.state.error}
              &nbsp;&nbsp;
              <button className='btn' onClick={this.dismissError}>✖</button>
            </h4>
          } 
            
            <input className='userfont' type="submit" value="Submit" data-test="submit"></input>  
            </Grid>  
            </Grid>      
         </div>
          
        </form> 
        
        </div>
        );
    }
}
export default Login;