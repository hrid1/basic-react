import { Link, useLoaderData } from "react-router-dom";
import './Foods.css'
import Category from "../Category/Category";


const Foods = () => {

    
    const allFood = useLoaderData().categories;
    // const {idCategory, strCategory, strCategoryThumb} = allFood;
    
    return (
        <div className="category">
           <h2>Total foods:  {allFood.length}</h2>

           <div className="category-container">

                {
                    allFood.map(item =><Category id={item.idCategory} singleFood={item}></Category>)
                }

             
           </div>
        </div>
    );
};

export default Foods;