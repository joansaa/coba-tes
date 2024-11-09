import React from "react";
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="flex h-screen bg-gradient-to-r from-blue-500 to-blue-700">

            <div className="flex flex-col items-start justify-center w-full lg:w-6/10 bg-blue-500 p-8 lg:pl-32">
                <div className="text-left text-white space-y-4">
                    <h1 className="text-4xl font-bold">GoFinance</h1>
                    <p className="text-lg">Lorem ipsum dolor sit amet</p>
                    <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white">
                        Read More
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-center w-full lg:w-4/10 p-8 bg-white">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-left space-y-1">
                        <h2 className="text-2xl font-semibold text-gray-800">Hello!</h2>
                        <p className="text-gray-800">Sign Up to Get Started</p>
                    </div>
                    
                    <form className="mt-8 space-y-6">
                        <div className="relative">
                            <i className="bx bx-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                            <input
                                type="text" 
                                placeholder="Full Name" 
                                className="w-full px-10 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                            />
                        </div>

                        <div className="relative">
                            <i className="codicon codicon-mail absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                            <input
                                type="email" 
                                placeholder="Email Address" 
                                className="w-full px-10 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                            />
                        </div>
                        
                        <div className="relative">
                            <i className="codicon codicon-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                            <input 
                                type="password" 
                                placeholder="Password" 
                                className="w-full px-10 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="w-full px-4 py-3 mt-4 text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Register
                        </button>

                        <div className="text-center mt-4">
                            <span className="text-sm text-gray-800">Already have an account? </span>
                            <Link to="/" className="text-sm text-blue-600 underline hover:text-blue-800">
                                Login Here
                            </Link>
                        </div>
                    </form>

                </div>
            </div>
            
        </div>
    );
};

export default Register;
