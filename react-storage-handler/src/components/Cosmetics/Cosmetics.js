import React, { useEffect, useState } from 'react';
import{  Cosmetic, ShowProduct } from '../Cosmetic/Cosmetic';
import { getTotal } from '../../utilities/calculation';


const Cosmetics = () => {

  /*  const cosmetics = [
        {id: 1, name: 'Alta', price: 100},
        {id: 2, name: 'Palta', price: 320},
        
    ]
    */

    const [cosmetics, setCosmetics] = useState([]);
        useEffect( ()=> {

            fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))

        },[])
        
// calculation total price
    const total = getTotal(cosmetics);

    return (
        <div>

            <h1>Welcome to Cosmetics Store</h1>
            <h3>Only For: $ {total}</h3>

            {
                // cosmetics.map( cosmetic => <Cosmetic name={cosmetic.name} price = {cosmetic.price}> </Cosmetic>)
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic = {cosmetic}></Cosmetic>)
            
            }

            <h2>Copyright @ info</h2>
            {/* <div className='cosmetic'>
                <h1>Cosmetic Store2</h1>
            {
                cosmetics.map(cosmetics => <ShowProduct cosmetic = {cosmetics}></ShowProduct>)
            }
            </div> */}
            
        </div>
    );
};

export default Cosmetics;