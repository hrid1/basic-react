import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import './Posts.css'

const Posts = () => {


    const allPost = useLoaderData() 

    return (
        <div>

            <h2>Total Post:{allPost.length}</h2>

           <div className="post-container">
           {
                allPost.map(post => <Post post={post}></Post>)
            }
           </div>
            
        </div>
    );
};

export default Posts;