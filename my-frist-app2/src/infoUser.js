import { useEffect, useState } from "react";

export function ExternalUser () {
    const [users, setUsers] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <h2>External Users</h2>
            <p>{users.length}</p>
            {
                // users.map(user => <li>{user.name}</li>)
                users.map(user => <User name={user.name} email={user.email}></User>)
            }
        </div>
    )
}

function User(props){
    return (
        <div style={{border: '2px solid red', margin: '10px'}}>
            <h3>Name: {props.name}</h3>
            <p>Email: {props.email}</p>
        </div>
    )
}