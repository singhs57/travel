import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Login from './LOGIN/Login';
import Home from './HOME/Home';
import About from './ABOUT/About';
import Contact from './CONTACT/Contact';
import Logout from './LOGOUT/Logout';
import Card from './HOME/CARD/Card';
import Gallery from './GALLERY/Gallery';
import Footer from './FOOTER/Footer';
import Achivements from './ACHIVEMENTS/Achivements';

class App extends React.Component{  
  
  render(){
  return (
    
    <div>
      
      <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Login" component={Login} />
      <Route path="/Logout" component={Logout} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />  
      <Route path="/Card" component={Card} />  
      <Route path="/Gallery" component={Gallery} />  
      <Route path="/Achivements" component={Achivements} /> 
      <Route path='/Footer' component={Footer}/> 
      </Switch>
      </BrowserRouter> 
      
       
      <br />
      <Footer/> 
           
    </div>
    );
  }
};

export default App;
