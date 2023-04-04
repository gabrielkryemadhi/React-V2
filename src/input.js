import { useEffect, useState } from "react";
import React from "react";
import { useLogin } from "./useLogin";

// export class Input extends React.Component{
//     state = { 
//         username: '',
//         password: '',
//         remember: '',
//         button: 'true'
//     }

//     handleInput = (event) => {
//         const value = event.target.value;
//         const name = event.target.name;
//         const type = event.target.type;
//         const checked = event.target.checked;

//         this.setState({ [name]: type === "checkbox" ? checked : value })
//     }

//     handleData = () => {
//         this.props.handleData(this.state)
//     }

//     render() {
//         return <>
//         <form className='login-form'>
//          <input name='username' value={this.state.username} onChange={this.handleInput}></input>
//          <input name='password' type='password' value={this.state.password} onChange={this.handleInput}></input>
//          <input name='remember' type='checkbox' checked={this.state.remember} onChange={this.handleInput}></input>
//         </form>
//         <div>
//          <button type='submit' name='button' onClick={this.handleData} disabled={this.state.username === '' || this.state.password === '' ? true : false}><h2>Login</h2></button>
//         </div>
//         </>
//     }
// }

export function Input({handleData}){
 const [username, password, setUsername, setPassword] = useLogin();
 const [remember, setRemember] = useState(false);
 


}
