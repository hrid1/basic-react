import { NavLink } from 'react-router-dom';
import './Category.css'

const Category = ({singleFood}) => {
    console.log(singleFood);
    const {idCategory, strCategory, strCategoryThumb} = singleFood;
    return (
        <div className='single-Category'>
            <h3>Id: {idCategory}</h3>
            <img src={strCategoryThumb} alt="" />
            <h2>{strCategory}</h2>
            <button>
                <NavLink to={`/food/${strCategory}`}>More Details</NavLink>
            </button>
        
        </div>
    );
};

export default Category;