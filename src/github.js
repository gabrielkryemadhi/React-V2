import React, { useEffect, useState } from "react";

export function GithubUser({username}){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchUser(username){
        setLoading(true);
        setError(null);

        try{
        const response = await fetch(`https://api.github.com/users/${username}`);
        const json = await response.json();

        setData(json);
    } catch (error) {
        setError(error)
        setData(null)
    } finally {
        setLoading(false)
    }
    }

    useEffect(() => {
        fetchUser(username)
    }, [username])

    console.log(data)

    return(
        <>
        {data && <h1>{data.name}</h1>}
        </>
    )

}