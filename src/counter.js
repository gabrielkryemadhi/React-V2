import React from "react";

export class Counter extends React.Component{
   state = {
    count: this.props.startPoint ?? 0
   }
    
constructor(props){
    super(props)
    const {incrementValue, period} = props

    setInterval(() => {
        this.setState((state) => {
            return{
            count: state.count + (incrementValue ?? 1),
            }  
        })
    }, period)}


    render(){
        return <div>Counter: {this.state.count}</div>
    }
}