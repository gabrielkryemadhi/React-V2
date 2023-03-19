import React from "react";

export class Counter extends React.Component{
   state = {
    count: this.props.startPoint ?? 0
   }
    
buttonClick = () => {
    this.setState((state) => {
        return{
            count: state.count + this.props.incrementValue ?? 1
        }
    })
}

    render(){
        return(
            <div>
                <h3>Counter: {this.state.count}</h3>
                <button onClick={this.buttonClick}>Increment!</button>
            </div>
        ) 
    }
}