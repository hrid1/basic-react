import React, { useEffect, useState } from 'react';

const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect( () => {

        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))

    }, [])

    return (
        <div>

            <h1>Country  Info2</h1>
            

            {
               

                // countries.map(country => <Country name={country.name.common} population={country.population}></Country> )

                countries.map(country => <Country name= {country.name.common} population = {country.population}></Country>)
               
                
            }

            
        </div>
    );
};

function Country(props) {
    return (
        <div style={{borderRadius:'10px', margin:'10px', padding:'5px',background:'yellow'}}>
            <h2>Name:{props.name} </h2>
            <h3>Population: {props.population}</h3>
        </div>
    )
}

export default Countries;