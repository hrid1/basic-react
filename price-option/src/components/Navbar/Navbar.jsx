import React, { useState } from 'react';
import Links from '../Links/Links';
import { HiMenuAlt1 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {

    const [open, setOpen] = useState(false);

   const routes = [
    {id: 1, name: "Home", path: "/"},
    {id: 2, name: "About", path: "/about"},
    {id: 3, name: "Services", path: "/services"},
    {id: 4, name: "Contact", path: "/contact"},
    {id: 5, name: "Portfolio", path: "/portfolio"}
  ] 


    return (
        <nav>

            <div  onClick={()=> setOpen(!open)} className=' cursor-pointer text-2xl md:hidden'>
                {
                    open === true ? 
                    <GrClose></GrClose>
                    : <HiMenuAlt1></HiMenuAlt1>
                }
                
            </div>
{/*  open ? '': 'hidden' */}

            <ul className={`md:flex md:static gap-5 bg-slate-900 p-5 absolute duration-700 ${
                open ? 'left-5':'-left-80'
               }
            }` }
            >
                {
                    // routes.map(route => <li>{route.name}</li>)
                    routes.map(route => <Links id={routes.id} route={route}></Links>)
                }
            </ul>      
        </nav>
    );
};

export default Navbar;