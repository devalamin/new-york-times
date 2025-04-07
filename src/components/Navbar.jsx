import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext)

    return (
        <div className='my-5 flex items-center justify-between w-11/12 mx-auto'>
            <div>
                <p className='font-bold'>{user?.email}</p>
            </div>
            <div className='space-x-4 text-xl font-bold'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </div>
            <div className='flex items-center gap-3'>
                <FaUserCircle className='text-3xl'></FaUserCircle>
                {
                    user ? <button onClick={logOutUser} className='btn btn-warning rounded-none'>Logout</button> : <Link to='/auth/login' className='btn btn-primary rounded-none'>Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;