import React from 'react';
import './Meal.css';

const Meal = ({meal}) => {
    // console.log(props.meal)
    const {strMeal, strMealThumb, idMeal} = meal;
    return (
        <div className='meal-details'>
            <img src={strMealThumb} alt="" />
            <h3>{strMeal}</h3>
        </div>
    );
};

export default Meal;