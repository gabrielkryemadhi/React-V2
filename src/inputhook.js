import { useState } from "react";

export function Login(){
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false,
    })

    function handleInput(e){
        const {name, value, type, checked} = e.target

        setData((data) => {
            return{
            ...data,
            [name]: type === 'checkbox' ? checked : value,
            }
        })
    }

    return <>
    <form>
        <input onChange={handleInput} value={data.username} name="username"/>
        <input onChange={handleInput} value={data.password} name="password" type="password"/>
        <input onChange={handleInput} checked={data.remember} type="checkbox" name="remember"/>
    </form>
    </>
}