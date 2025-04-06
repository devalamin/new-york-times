import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleCreateUser = (e) => {
        e.preventDefault()

        const formdata = new FormData(e.target)
        const name = formdata.get('name')
        const photo = formdata.get('photo')
        const email = formdata.get('email')
        const password = formdata.get('password')

        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">


                </div>
                <div className="card bg-base-100 p-14 shrink-0 rounded-none">
                    <h1 className="text-2xl font-bold">Register Your Account!</h1>
                    <div className="divider"></div>
                    <div className="card-body w-md">
                        <form onSubmit={handleCreateUser}>

                            <fieldset className="fieldset">
                                <label className="fieldset-label">Your Name</label>
                                <input name='name' type="text" className="input w-full bg-gray-100" placeholder="Name" />
                                <label className="fieldset-label">Your Photo</label>
                                <input name='photo' type="text" className="input w-full bg-gray-100" placeholder="Photo" />
                                <label className="fieldset-label">Email</label>
                                <input name='email' type="email" className="input w-full bg-gray-100" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input name='password' type="password" className="input w-full bg-gray-100" placeholder="Password" />
                                <button className="btn btn-neutral mt-4 rounded-none">Register</button>
                            </fieldset>
                        </form>
                        <p>Already Have An Account? <Link to='/auth/login' className='text-blue-500 underline'>Login Here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;