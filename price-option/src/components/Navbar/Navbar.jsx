import React from 'react';
import Links from '../Links/Links';

const Navbar = () => {

   const routes = [
    {id: 1, name: "Home", path: "/"},
    {id: 2, name: "About", path: "/about"},
    {id: 3, name: "Services", path: "/services"},
    {id: 4, name: "Contact", path: "/contact"},
    {id: 5, name: "Portfolio", path: "/portfolio"}
  ] 
  

    return (
        <nav>
            <ul className='md:flex gap-5'>
                {
                    // routes.map(route => <li>{route.name}</li>)
                    routes.map(route => <Links id={routes.id} route={route}></Links>)
                }
            </ul>      
        </nav>
    );
};

export default Navbar;