
import React from 'react';
import './Country.css'

const Country = (props) => {
    
    const {area, region, flags} = props.country;

    return (

        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>Country: {props.country.name.common}</h2>
            <h3>Region: {region}</h3>
            <p>Population: {props.country.population}</p>
            <h5>Area: {area}</h5>
            

            {/* {
                console.log(props.country.name.common)
            } */}
          
        </div>
    );
};

export default Country;