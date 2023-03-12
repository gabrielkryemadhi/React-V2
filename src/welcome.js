import React from "react";
import { Age } from "./age";

class Welcome extends React.Component{
    render(){
        return (
        <div>
        <p>Hello, {this.props.name}!</p>
        {this.props.age > 18 && <Age age={this.props.age}/>}  
        </div>
      )
    }
}

Welcome.defaultProps = {
    name: "Mars"
}

export default Welcome;