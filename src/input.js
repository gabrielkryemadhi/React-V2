import React from "react";

export class Input extends React.Component{
    state = { 
        username: '',
        password: '',
        remember: '',
    }

    handleInput = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const type = event.target.type;
        const checked = event.target.checked;

        this.setState({ [name]: type === "checkbox" ? checked : value })
    }

    handleState = () => {
        this.setState({
            username: '',
            password: '',
            remember: '',
        })
    }

    render() {
        return <>
        <div>
         <button onClick={this.handleState}><h2>Reset</h2></button>
        </div>
        <div>
         <input name='username' value={this.state.username} onChange={this.handleInput}></input>
         <input name='password' type='password' value={this.state.password} onChange={this.handleInput}></input>
         <input name='remember' type='checkbox' checked={this.state.remember} onChange={this.handleInput}></input>
         </div>
        </>
    }
}
