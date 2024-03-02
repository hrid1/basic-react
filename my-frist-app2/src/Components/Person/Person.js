import React, { useEffect, useState } from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';

const Persons = () => {
    
    const [persons, setPerson] = useState([])

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setPerson(data))
    },[])

    return (
        <div>
            <h1>Person Info</h1>

            {
                // persons.map(person => <li>{person.name}</li> )
                persons.map(person => <User name={person.name} email= {person.email}></User>)
            }

        
        </div>
    )
}




function User({name, email}) {

  return (
    <div style={{border:'2px solid black', margin: '10px', borderRadius:'5px'}}>

     <h2> {name} </h2>
     <h3>Email : {email}</h3>

    </div>
  )
    
   
}


export default Persons;