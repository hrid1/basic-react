import { useLoaderData } from "react-router-dom";


const Userinfo = () => {

    const users = useLoaderData();
    const {name, email, website} = users;
    // console.log(users)
    console.log(users)
    
    return (
        <div style={{border:'1px solid' , borderRadius:'10px', padding:'10px' }}>

            <h4>Details About User</h4>
            <h3>Name: {name}</h3>
            <p>Email:{email}</p>
            <p>Website: {website}</p>
            
        </div>
    );
};

export default Userinfo;