import { useState } from "react";


const StatefulForm = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


   const handleSubmit = e  => {
    e.preventDefault();
    console.log(name, email)
    console.log(password)

   }

   const handleChangeName = e => {
    setName(e.target.value);
   }

   const handleEmailChange = e => {
    setEmail(e.target.value);
    
   }
   const handlePasswordChange = e => {
    setPassword(e.target.value)
   }

    return (
        <div>

            <form onSubmit={handleSubmit}>

                <label htmlFor="">Name: </label>
                <input onChange={handleChangeName} type="text" name="name" /> 
                <br />

                <label htmlFor="">Email: </label>
                <input onChange={handleEmailChange} type="email" name="email" /> 
                <br />

                <label  htmlFor="">Password: </label>
                <input onChange={handlePasswordChange} type="password" />
                <br />

                <input type="submit" value=" Submit "/>

            </form>

        </div>
    );
};

export default StatefulForm;