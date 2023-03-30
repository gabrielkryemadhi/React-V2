import { useState } from "react";
import { GithubUser } from "./github";

export function GithubUserList(){

    const [usernames, setUsernames] = useState([])
    
    function addUser(e) {
        e.preventDefault();
        const input = e.target.elements.username;
        const newUsername = input.value;
        if(newUsername){
            setUsernames([...usernames, newUsername]);
            input.value = '';
        }
    };
    
    return(
        <>
    <form onSubmit={addUser}>
        <input type='text' name='username' placeholder="username"></input>
        <button type="submit">Add user</button>
    </form>
    <ul>
        {usernames.map((user, index) => (
            <li key={index}>
                <GithubUser username={user} />
            </li>
        ))}
    </ul>
    </>
  )
};
