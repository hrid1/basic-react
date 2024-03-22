import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './postsingle.css'
const Postsingle = () => {

    const post = useLoaderData();
    const navigate = useNavigate();
    const {id, title, body} = post; 
   
    // console.log(post)
    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div className='post-single'>
            <h2>Single POst Details </h2>
            <h3>Id: {id}</h3>
            <h4>{title}</h4>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default Postsingle;