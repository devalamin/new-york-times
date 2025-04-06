import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">


                </div>
                <div className="card bg-base-100 p-14 shrink-0 rounded-none">
                    <h1 className="text-2xl font-bold">Login To Your Account!</h1>
                   <div className="divider"></div>
                    <div className="card-body w-md">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input w-full bg-gray-100" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input w-full bg-gray-100" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4 rounded-none">Login</button>
                        
                        </fieldset>
                        <p>Do Not Have An Account? <Link to='/auth/register' className='text-blue-500 underline'>Create A New One</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;