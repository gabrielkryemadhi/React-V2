import React from "react";

export class Uncontrolled extends React.Component{
    handleSubmit = (e) => {
        e.preventDefault()
        const username = e.target.elements.username.value
        const password = e.target.elements.password.value
        const remeber = e.target.elements.remeber.checked

        console.log({
            username,
            password,
            remeber
        })
    }

    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="username" />
                <input type="password" name="password"/>
                <input type="checkbox" name="remeber"/>

                <button type="submit">Login</button>
                <button type="reset">Reset</button>
            </form>
            </>
        )
    }
}