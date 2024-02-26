import logo from './logo.svg';
import './App.css';

const number = 3000;
const person = {name: 'Hrid', job: 'Dev'};

const personStyle = {
  color: 'green',
  backgroundColor: 'white',
  padding: '10px',
  borderRadius: '5px',
  fontWeight: 'bold'
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
        
//       <h1> JSX </h1>
//       <h3 className="container">Hello Welcome to React</h3>
//       <p style={{color: 'blue', backgroundColor: 'yellow', 
//       padding: '5px'}}>I love You {number}</p>
//       <p style={personStyle} >Name: {person.name} and Job: {person.job}</p>

//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
        
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App(){

  const nayoks = ['Thor', 'Loki', 'Jhon', 'Tony']

  return (
    <div className="App" >
    {
      nayoks.map(hero =>  <li>Name: {hero}</li>)
    }

    {
      nayoks.map(hero => <Person name={hero}> </Person>)
    }

<h1>Player Details: </h1>
     <Person name="Mashrafi Bin Murtoza"> </Person>
     <Person name="Tamim Islam"> </Person>
     <Person name="Sakib Al Hassan"> </Person>
<h1>Actor Details: </h1>
    <Actor name='ShaRukh Khan' role='Romance'> </Actor>
    <Actor name='Salman Khan' role='Action'> </Actor>
    <Actor> </Actor>

     {/* <Player> </Player> */}

    </div>
  )
}


function Person(props){
  console.log(props);
  return (
    <div className='person'>
       <h1>{props.name}</h1>
       <h2>Profession: Cricket</h2>
    </div>
  )
}

// function Player() {
//   return(
//     <div>
//       <h1>Messi</h1>
//       <h1>Ronaldo</h1>
//       <h1>Neymar</h1>
//     </div>
  
//   )
// }

function Actor({name, role}) {
  return (
    <div className='person'>
      <h1>{name}</h1>
      <h2>Best In: {role}</h2>
    </div>
  )
}

export default App;
