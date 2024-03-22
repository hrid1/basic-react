import React from 'react';
import './Post.css'
import { Link } from 'react-router-dom';

const Post = (props) => {

    const {id, title, body} = props.post;

    return (
        <div className='post'>
                <h3>ID {id}</h3>
                <h4>Title: {title}</h4>
                {/* <p>{body}</p> */}
                <Link to={`/post/${id}`}>Show Details</Link>

        </div>
    );
};

export default Post;