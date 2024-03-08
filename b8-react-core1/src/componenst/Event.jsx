import React from 'react';

const Event = () => {


    const handleClick = () => {
        alert('button clicked');
      }
    
      const addFive = num => {
        alert(num+5)
      }

    return (
        <div>
            <h3>React Core Concepts</h3>
            <button onClick={handleClick}>Button-1</button>
            <button onClick={ () => alert('button 2 click')}>Button-2</button>
            <button onClick={ () => {addFive(5)}}>Button-3</button>
        </div>
    );
};

export default Event;