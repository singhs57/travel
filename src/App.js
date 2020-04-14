import React from 'react';
import './App.css';
import Menu from './MENU/Menu';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Login from './LOGIN/Login';
import Home from './HOME/Home';
import About from './ABOUT/About';
import Contact from './CONTACT/Contact';
import Logout from './LOGOUT/Logout';


class App extends React.Component{  
  
  render(){
  return (
    
    <div className='App'>
      
      <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Menu} />
      <Route path="/Login" component={Login} />
      <Route path="/Logout" component={Logout} />
      <Route path="/Home" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />   
      </Switch>
      </BrowserRouter>         
    </div>
    
  );
  }
};

export default App;
