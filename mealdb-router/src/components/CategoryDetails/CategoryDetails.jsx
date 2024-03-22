import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";
import './CategoryDetails.css'


const CategoryDetails = () => {

    const meals = useLoaderData().meals;
    console.log(meals)

    return (
        <div>
            <h2>This category details {meals.length}</h2>

           <div className="category-meal">
           {
                meals.map(food => <Meal id={food.idMeal} meal={food}></Meal>)
            }
           </div>
        </div>
    );
};

export default CategoryDetails;