import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Home.css'
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div className='navbar'>
            <h1>Welcome To Home page.</h1>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/profile">Profile</Link>

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;