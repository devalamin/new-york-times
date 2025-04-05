import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='mt-5 flex items-center justify-between w-11/12'>
            <div></div>
            <div className='space-x-4 text-xl'>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </div>
            <div className='flex items-center gap-3'>
                <FaUserCircle className='text-3xl'></FaUserCircle>
                <button className='btn btn-primary rounded-none'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;