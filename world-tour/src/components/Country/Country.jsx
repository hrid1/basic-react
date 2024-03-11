import React, { useState } from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props);

    const [visited , setVisited] = useState(false);

    const wantToGo = () => {
        setVisited(!visited);
    }

   

    const {name, cca2, capital,flags, area} = props.country;

    // console.log(props.addToFavorite)

  
    return (
        <div className='country'>
            <h2>{name.common}</h2>
            <img src={flags.png}></img>
            <p>Capital: {capital} </p>
            <p>Area: {area} </p>
            <button onClick={wantToGo} className='btn-vitsited'>Visited</button>
            <button onClick={()=> {props.addToFavorite(props.country)}} className='btn-vitsited'>Add To List</button>
            <p>
                {visited ? 'Alread Visited': 'I want To Visite'}
            </p>
        </div>
    );
};

export default Country;