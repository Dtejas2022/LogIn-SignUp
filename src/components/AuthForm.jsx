import React, { useState } from 'react';

const AuthForm = () => {
    const [isLogIn, setIsLogIn] = useState(true);

    return (
        <div className='flex justify-center items-center w-full bg-sky-700 h-screen'>
            <div className='bg-white p-5 rounded-lg w-80 shadow-lg'>
                <div className='flex justify-between items-center bg-slate-200 rounded-md mb-5'>
                    <button 
                        className={`w-1/2 p-3 transition duration-300 ${isLogIn ? 'bg-blue-900 text-white' : 'hover:bg-gray-300'}`}
                        onClick={() => setIsLogIn(true)}
                    >
                        Log in
                    </button>
                    <button 
                        className={`w-1/2 p-3 transition duration-300 ${!isLogIn ? 'bg-blue-900 text-white' : 'hover:bg-gray-300'}`}
                        onClick={() => setIsLogIn(false)}
                    >
                        Sign up
                    </button>
                </div>

                {isLogIn ? (
                    <div>
                        <h2 className='text-xl mb-3'>Log In</h2>
                        <input type="email" placeholder='Email' className='w-full mb-2 p-2 border rounded' />
                        <input type="password" placeholder='Password' className='w-full mb-2 p-2 border rounded' />
                        <a href="#" className='text-blue-400 text-sm block mb-3'>Forgot Password?</a>
                        <button type="submit" className='w-full bg-blue-900 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300'>
                            Login
                        </button>
                        <p className='text-sm mt-3 text-center'>
                            Not a Member? <a href="#" className='text-blue-400' onClick={() => setIsLogIn(false)}>Sign Up Now</a>
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className='text-xl mb-3'>Sign Up</h2>
                        <input type="email" placeholder='Email' className='w-full mb-2 p-2 border rounded' />
                        <input type="password" placeholder='Password' className='w-full mb-2 p-2 border rounded' />
                        <input type="password" placeholder='Confirm Password' className='w-full mb-2 p-2 border rounded' />
                        <button type="submit" className='w-full bg-blue-900 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300'>
                            Sign Up
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AuthForm;
