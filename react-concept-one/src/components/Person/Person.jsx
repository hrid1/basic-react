import React, { useState } from 'react';
import { users } from '../../../test';


const Person = () => {
    const [data, setData] = useState(users);
    // console.log(typeof(data))

    const deleteUser = (id) => {
        // console.log('i got id: ' + id)
        const filterData = data.filter(user => user.id !== id);
        setData(filterData);
        
    }


    return (
        <div className='text-center'>

            <h1 className=' text-center font-semibold text-3xl'>This is person info</h1>

            <div className=' grid grid-cols-4 mt-3 gap-2'>
            {
                // data.map(user => console.log(user.name))
                // eslint-disable-next-line react/jsx-key
                data.map(user => <>
                   <div  className='border w-48 rounded-md p-3 mx-auto my-2 bg-slate-900'>
                   <p className='text-xl'>Name: {user.name}</p> 
                    <p className='text-xl'>Age: {user.age}</p> 
                    <button onClick={ () => {deleteUser(user.id)}} className='btn btn-secondary mt-2'>Delete</button>
                   </div>
                </>)
            }
            </div>
            <button onClick={ () => {setData([])}} className='btn btn-success'>Remove All</button>
            
        </div>
    );
};

export default Person;

<h1>this is person info</h1>