import React, { useEffect, useState } from 'react';
import './Person.css'

const Persons = () => {

    const [user, setUser] = useState([]);
    useEffect( ()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])

    
    


    return (
        <div>

            <h1>User Information</h1>
            
            <div className='user-container'>
            {
                user.map(person => <Person person={person}></Person>)
            }
            </div>
            
        </div>
    );
};


function Person(props) {

    const {name, email, phone} = props.person;
    return (
        <div className='user-info'>
            <h2>Name: {name} </h2>
            <h3>Email: {email} </h3>
            <h3>Phone: {phone} </h3>
        </div>
    )
    
}

export default Persons;