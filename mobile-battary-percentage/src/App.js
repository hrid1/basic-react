import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // const [number, setNumber] = useState(0);

  
  const [count, setCount] = useState(0);

  const inCharge = () => {
    if(count < 100)
      setCount(count+10);
  }

  const disCharge = () => {
    if(count>0)
      setCount(count-10);
    
      
  }

  return (
    <div className="App" style={{backgroundColor:'navy', color:'white'}}>
      
     
     <div className='battery-container'>

    <div className='battery-top'>
      {/* battary top */}
    </div>
     <div className='battary'>

      <h1 style={{color:'black', marginTop:'100px'}}> <span>{count}</span>%</h1>

     </div>

     <button onClick={inCharge} className='btn-primary'>Charge Me</button>
     <button onClick={disCharge} className='btn-primary'>Use Me</button>

     </div>

      
      
    </div>
  );
}

export default App;
