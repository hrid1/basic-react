import React from 'react';

const Priceoption = () => {


    
        const priceOptions = [
            {
                "id": 1,
                "name": "Basic",
                "price": 30,
                "features": [
                  "Access to cardio area",
                  "Access to weightlifting area",
                  "Locker room access",
                  "Limited access to group fitness classes (3x per month)"
                ]
              },
              {
                "id": 2,
                "name": "Standard",
                "price": 50,
                "features": [
                  "Access to all Basic features",
                  "Unlimited access to group fitness classes",
                  "Access to sauna"
                ]
              },
              {
                "id": 3,
                "name": "Premium",
                "price": 80,
                "features": [
                  "Access to all Standard features",
                  "Personal trainer sessions (2x per month)",
                  "Towel service",
                  "Access to swimming pool"
                ]
              }
        ]
      
      


    return (
        <div>
            <h1 className='text-2xl text-center'>This is our price Option</h1>
            
        </div>
    );
};


export default Priceoption;