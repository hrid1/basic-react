import React from 'react';
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const Singleprice = ({option}) => {

    const {id, name, price , features} = option;
    return (
        
            
            <div className='border m-5 p-8 bg-slate-800 text-center rounded-xl flex flex-col'>

                <h1>
                    <span className=' font-bold text-6xl'>$ {price}</span> <span className='text-xl'>/mon</span>
                </h1>
                <h1 className='text-2xl my-3 font-semibold'>
                    {name} Membership
                </h1>

                <div className='flex-grow my-5'>  
                {
                    features.map((feature, idx) => <Feature id={idx} feature={feature}></Feature>)
                }
                </div>

                <button className='bg-green-200 text-black hover:bg-green-400 p-1 font-semibold rounded mt-5 w-1/2 mx-auto'>BUy NOw</button>
            </div>

    )
            
        
    
};

Singleprice.PropTypes = {
    option: PropTypes.object
}

export default Singleprice;