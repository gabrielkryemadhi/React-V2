import React from "react";
import { Welcome } from "./welcome";

export class Input extends React.Component{
    state = { name: '' }

    handleInput = (event) => {
        const value = event.target.value;
        this.setState({ name: ' ' + value })
    }

    render() {
        return <>
        <Welcome name={this.state.name}/>
        <input name='nameOf' value={this.state.name} onChange={this.handleInput}></input>
        </>
    }
}
