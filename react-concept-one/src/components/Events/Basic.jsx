/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';


// ------------- describe the useState-----------------
const Basic = () => {


   const [value, setValue] = useState(1);


    return (
        <div>
           <div className='text-3xl text-center font-semibold'>
                <h1 className=' mt-2'>Basic Count</h1>

                <h1 className=' bg-slate-900 w-12 mx-auto rounded-md m-5'>{value}</h1>

                <button onClick={ () => { value > 0 && setValue(value-1)}} className='btn btn-primary mx-2'>Mius</button>
                <button onClick={  () => setValue(value+1)} className='btn btn-primary mx-2'>Plus</button>
           </div>
        </div>
    );
};

export default Basic;

