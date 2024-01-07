// import useLogin from "@/features/Authentication/useLogin";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../Header/Navbar';

interface SignInForm {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInForm>();
  const [loginError, setLoginError] = useState('');

//   const onSubmit = (data: SignInForm) => {
//     console.log(data);
//     // subit logic
//   };
const onSubmit = async (data: SignInForm) => {
    try {
		setLoginError('');
      // Example POST request to your authentication endpoint
      const response = await fetch('https://srmmilan.org/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const result = await response.json();

      //token storage in session
      if (result.token) {
        
        sessionStorage.setItem('userToken', result.token);
        console.log('Login successful');
      }
    } catch (error) {
      console.error('Login error:', error);
	  setLoginError('Failed to log in. Please check your credentials.');
    }
  };


  return (
	
    <div className="flex justify-center items-center h-screen bg-[#130c1a]">
		<Navbar/>
      <div className="max-w-full w-md md:w-4/6 lg:w-4/6 bg-[#28242f] rounded-xl shadow-lg p-6 space-y-6">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-6">Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          {/* Email Field */}
          <div className="flex flex-col">
            <label className="text-slate-100 text-sm md:text-lg lg:text-xl font-bold mb-2" htmlFor="email">EMAIL</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email address"
                }
              })}
              className="form-input mt-1 block w-full border-gray-300 bg-[#71697e] rounded-md shadow-sm"
              id="email"
              placeholder="your-email@example.com"
            />
            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-slate-100 text-sm md:text-lg lg:text-xl font-bold mb-2">PASSWORD</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
              })}
              className="form-input mt-1 block w-full border-gray-300 bg-[#71697e] rounded-md shadow-sm"
              id="password"
            />
            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
          </div>
		  {loginError && <p className="text-red-600 text-center">{loginError}</p>}

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              className="bg-violet-800 hover:bg-[#b19cff] text-white md:text-[1.5rem] font-bold px-8 py-4 md:py-6 md:px-12 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
              type="submit"
            >
              Sign In
            </button>
          </div>

          {/* Register Link */}
          <div className="text-center">
            <p className="text-slate-100">
              Don't have an account?
              <a href="/signup" className="text-blue-500 hover:text-blue-700 ml-2">Register.</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;



