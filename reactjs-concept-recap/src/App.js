import logo from './logo.svg';
import './App.css';
import Persons from './Persons/Persons';

function App() {
  return (
    <div className="App" style={{background:'gray'}}>
      <h1 style={{margin:'0'}}>Welcome To Recap</h1>
      
        <Persons></Persons>
      
    </div>
  );
}

export default App;
