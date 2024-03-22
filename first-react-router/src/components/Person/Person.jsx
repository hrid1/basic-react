import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Person = ({user}) => {

    const navigate = useNavigate();

    const handleShowMore = () => {
        navigate(`../users/${user.id}`)
    }

    return (
        <div style={{border:"1px solid white",margin:"10px", padding:"5px", borderRadius:"10px"}}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <Link to={`/users/${user.id}`}>Show Details</Link>
            <button onClick={handleShowMore}>Show More</button>
        </div>
    );
};

export default Person;