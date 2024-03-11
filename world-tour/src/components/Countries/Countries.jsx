import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const [favorite, setFavorite] = useState([]);

  const addToFavorite = country => {
    // console.log(`add favorite to country ${id}` )

    if (favorite.includes(country)){
      alert("Value is already there")
    }


    else {

      const newFavorite = [...favorite, country]
      setFavorite(newFavorite)

    }

   
  }

 

   console.log(favorite);

  return (
    <>

      <div>
        <h1>Favorite List: </h1>
        <ul>

          {
           favorite.map(country => <h3>{country.name.common}</h3>)
          }
            
        </ul>
      </div>

      <div className="country-container">
        {countries.map((item) => (
          <Country id={item.cca2} country={item} addToFavorite={addToFavorite}>

          </Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
