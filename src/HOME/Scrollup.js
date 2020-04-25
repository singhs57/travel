import React from 'react';
import './Scrollup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons'



class Scrollup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            is_visible: false
        };
    }
    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function(e) {
          scrollComponent.toggleVisibility();
        });
      }
      toggleVisibility() {
        if (window.pageYOffset > 300) {
          this.setState({
            is_visible: true
          });
        } else {
          this.setState({
            is_visible: false
          });
        }
      }   
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
   
render(){
    const { is_visible } = this.state;
return(
<div className='Scroll-up'>
{is_visible && (
<FontAwesomeIcon icon={faArrowAltCircleUp} title="Let's Move to top" onClick={this.scrollToTop}/>
)}
</div>
);
}
}
export default Scrollup;