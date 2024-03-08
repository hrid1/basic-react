import React, { useState } from 'react';

const Counter = () => {

    const [count , setCount] = useState(1);

    return (
        <div>

            <h2>Counter: {count}</h2>
            <button onClick={ ()=> setCount(count+1) }>Increase</button>
            <button onClick={ ()=>  {count > 0 && setCount(count-1)} }>Decrease</button>
           
            
        </div>
    );
};

export default Counter;
   