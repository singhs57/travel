import React from 'react'
import Header from './Header/Header';


export class RootHeader extends React.Component{
render(){
    return(
        <div>
            <Header/>
            {this.props.children}
        </div>
    );
}

}
export default RootHeader;