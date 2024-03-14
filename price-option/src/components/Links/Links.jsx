import React from 'react';
import PropTypes from 'prop-types';

const Links = ({route}) => {
    console.log(route)
    return (
    
          <li>
              <a href={route.link}>{route.name}</a>
          </li>
            
    
    );
};

Links.PropTypes = {
    route: PropTypes.object
}

export default Links;