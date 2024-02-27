import logo from './logo.svg';
import './App.css';
import {Actor} from './avenger.js'
import { useState } from 'react';
import {Counter2} from './count.js'
import { ExternalUser } from './infoUser.js';

function App() {

  const products = [
    
   {  name: 'mobile', price : 12000},
   {  name: 'laptop', price : 4200},
   {  name: 'watch', price : 32000},
   {  name: 'tablet', price : 5600},
    
  ]

  const superHero = [
    {name: 'IronMan', salary: 34000},
    {name: 'Captain America', salary: 44000},
    {name: 'Thor', salary: 56000},
    {name: 'Natasa Romanaf', salary: 36000},
  ]

  return (
    <div className="App">


    <ExternalUser> </ExternalUser>



      {/* <Counter> </Counter> */}
      {/* <Counter2></Counter2> */}
     

      {/* {
        products.map(item => <Product name={item.name}<h1>Products Details</h1>

       price={item.price}></Product>)
      } */}

      {/* {
        <Actor name='Tony' salary="12000"> </Actor>
      } */}

      {/* <Product name="Mobile" price="24000"> </Product>
      <Product name="Laptop" price="89000"> </Product>
      <Product name="Watch" price="23000"> </Product> */}
      

    </div>
  );
}

function Product(props){

  return (

    <div className='product'>
      <h2> Name: {props.name} Price: {props.price} </h2>
    </div>
    
  )

}

function Counter() {
  const [count, setCount] = useState(0);
  const increseCount = () => setCount(count+1); 
  const decreseCount = () => setCount(count-1);

  // const increseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
 // }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increseCount}>Increse</button>
      <button onClick={decreseCount}>Decrese</button>
    </div>
  )
}



export default App;
