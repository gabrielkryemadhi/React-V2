import React from "react";
import { Display } from "./display";

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
    }, period ?? 1000)}


    render(){
        return <Display count={this.state.count}/>
    }
}