import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa6';

const SocialLogin = () => {
    return (
        <div>
            <h3 className='font-bold text-xl'>Login With</h3>
        <div className='*:my-2 flex flex-col'>
            <button className="btn font-semibold text-lg">
                <FaGoogle/>
                Login With Google</button>
            <button className="btn font-semibold text-lg">
                <FaGithub/>
                Login With Github</button>
        </div>
        </div>
    );
};

export default SocialLogin;