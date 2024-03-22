import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Person from '../Person/Person';

const User = () => {

    const users = useLoaderData();

    return (
        <div>

            <h1>This is User Section</h1>
            <h2>Total User: {users.length}</h2>
           
           <div style={{display:'grid', gridTemplateColumns:"repeat(3, 1fr)"}}>
           {
                // users.map(user => <li>{user.name}</li>)
                users.map(user => <Person key={user.id} user={user}></Person>)
            
            }
           </div>
      
            
        </div>
    );
};

export default User;