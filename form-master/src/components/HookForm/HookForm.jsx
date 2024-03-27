import React from 'react';
import useInputState from '../../hooks/useInputState';

const HookForm = () => {
    const [name, handleNameChange] = useInputState('hridoy')
    

    const handleSubmit = e => {
        console.log('form data: ', name)
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} value={name} name='name' type="text" />
                <br />
                <input name='email' type="email" />
                <br />
                <input name='password' type="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
};

export default HookForm;