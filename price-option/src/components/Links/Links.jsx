import React from 'react';

const Links = ({route}) => {
    console.log(route)
    return (
    
          <li>
              <a href={route.link}>{route.name}</a>
          </li>
            
    
    );
};

export default Links;