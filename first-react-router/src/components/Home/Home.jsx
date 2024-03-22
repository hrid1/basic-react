import React from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigation } from 'react-router-dom';
import './Home.css'
import Footer from '../Footer/Footer';
const Home = () => {

    const navigation = useNavigation();
    const location = useLocation();
    // console.log(location)
    return (
        <div className='navbar'>
            <h2>Welcome To Home page.</h2>

            <NavLink to="/">Home</NavLink >
            <NavLink to="/about">About</NavLink >
            <NavLink to="/contact">Contact</NavLink >
            <NavLink to="/profile">Profile</NavLink >
            <NavLink to="/users">User</NavLink >
            <NavLink to="/posts">Posts</NavLink >
           
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;