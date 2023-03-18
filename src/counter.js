import React from "react";

export class Counter extends React.Component{
   state = {count: this.props.startPoint ?? 0};
 componentDidMount(){
   setInterval(() => {
    this.setState((state) => {
    return{
     count: state.count + (this.props.incrementValue ?? 1),
    }  
    })
   }, this.props.period ?? 1000)   
 }
 render(){
   return <div>Counter: {this.state.count}</div>
  }
}