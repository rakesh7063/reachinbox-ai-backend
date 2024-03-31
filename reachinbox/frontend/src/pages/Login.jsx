import React from 'react';
import { FcGoogle } from "react-icons/fc";
import logo from '../assets/Logo.png';

function Login() {
  const handleSignUpWithGoogle = () => {
    localStorage.setItem("login", true)
    window.location.href = '/inbox';
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-between">
      <header className="flex justify-center border-b border-gray-800 py-4">
        <img src={logo} alt="Logo" className="w-40 text-white" />
      </header>

      <section className="flex flex-col items-center w-fit m-auto py-6 px-10 rounded-lg bg-gray-800 border border-gray-700 shadow-lg">
        <h2 className="text-2xl text-white font-semibold mb-8">Create a new account</h2>
        <button 
          className="flex gap-3 items-center border border-gray-600 bg-gray-800 text-gray-100 py-3 px-32 rounded mb-8 transition duration-700 ease-in-out transform hover:scale-95"
          onClick={handleSignUpWithGoogle}
        >
          <FcGoogle className='text-2xl'/>
          <span>Sign Up with Google</span>
        </button>
        
        <button onClick={handleSignUpWithGoogle} className="bg-blue-700 mt-4 hover:bg-blue-800 text-white font-normal py-3 px-12 rounded mb-8 transition duration-300 ease-in-out transform hover:scale-105">
          Create an Account
        </button>

        <div className="text-gray-500 text-lg">
          Already have an account? <span onClick={handleSignUpWithGoogle} className="hover:text-blue-500 text-gray-400 hover:underline cursor-pointer">Sign In</span>
        </div>
      </section>

      <footer className="border-t border-gray-800 py-4 text-gray-500 text-center">
        <p className="text-sm">© 2023 Reachinbox. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Login;
