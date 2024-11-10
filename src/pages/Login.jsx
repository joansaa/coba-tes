import React from "react";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Logika validasi login atau pengecekan bisa ditambahkan di sini
        navigate('/dashboard'); // Arahkan ke halaman dashboard setelah login
    };

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
                        <h2 className="text-2xl font-semibold text-gray-800">Hello Again!</h2>
                        <p className="text-gray-800">Welcome Back</p>
                    </div>
                    
                    <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                        <div className="relative">
                            <i className="codicon codicon-mail absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors duration-300 pointer-events-none"></i>
                            <input
                                type="email" 
                                placeholder="Email Address" 
                                className="w-full px-10 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        
                        <div className="relative">
                            <i className="codicon codicon-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                            <input 
                                type="password" 
                                placeholder="Password" 
                                className="w-full px-10 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Login
                        </button>

                        <div className="text-center mt-4">
                            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
                                Forgot Password
                            </a>
                        </div>

                        <hr className="my-6 border-gray-300 w-full" />

                        <div className="text-center">
                            <span className="text-sm text-gray-800">Don't have an account? </span>
                            <Link to="/register" className="text-sm text-blue-600 underline hover:text-blue-800">
                                Register Here
                            </Link>
                        </div>
                    </form>

                </div>
            </div>
            
        </div>
    );
};

export default Login;
