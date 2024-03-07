/* eslint-disable no-unused-vars */
import React from 'react';
import Basic from './components/Events/Basic';
import Person from './components/Person/Person';

const App = () => {
  return (
    <div>

      <h1 className='text-center text-sm text-green-300 mb-5'>Hello there, There are basic example of Event in React.</h1>
      {/* <Basic></Basic> */}

      <div>
        <Person></Person>
      </div>
     
      
    </div>
  );
};

export default App;