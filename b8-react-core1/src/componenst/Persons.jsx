import React, { useEffect, useState } from 'react';
import Person from './Person';

const Persons = () => {

    const [data , setData] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setData(data))
    },[])


    return (
        <div>

            <h1>Total Person:  {data.length}</h1>

            {/* {
                data.map(user => <p>{user.name}</p>)
            } */}


            {
                data.map(user => <Person user={user} key={user.id}> </Person>)
            }
        </div>
    );
};

export default Persons;