import React from 'react';

const Person = (props) => {

    const {name, phone} = props.user;

    return (
        <div style={{border:'1px solid white', textAlign:'center', margin:'20px'}}>
            <h3>Name: {name}</h3>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default Person;