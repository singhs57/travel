import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Login from './LOGIN/Login';
import Home from './HOME/Home';
import About from './ABOUT/About';
import Contact from './CONTACT/Contact';
import Logout from './LOGOUT/Logout';
import Header from './Header/Header';
import Card from './HOME/CARD/Card';

import Footer from './FOOTER/Footer';


class App extends React.Component{  
  
  render(){
  return (
    
    <div>
      <div>
        <Header/>
      </div>
      <BrowserRouter>
      <Switch>
      <Route path="/Header" component={Header} />
      <Route path="/" exact component={Home} />
      <Route path="/Login" component={Login} />
      <Route path="/Logout" component={Logout} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />  
      <Route path="/Card" component={Card} />  
      </Switch>
      </BrowserRouter> 
      
       
      <br />
      <Footer/> 
           
    </div>
    );
  }
};

export default App;
