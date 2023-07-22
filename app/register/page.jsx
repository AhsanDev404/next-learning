// src/components/RegisterForm.js
"use client"

import Link from 'next/link';
import { useForm } from 'react-hook-form';

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle the form submission here
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen">
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-5/12">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input
          {...register('username', {
            required: 'Username is required',
            minLength: { value: 6, message: 'Username must be at least 6 characters long' },
          })}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.username ? 'border-red-500' : ''}`}
          type="text"
          placeholder="Username"
        />
        {errors.username && <p className="text-red-500 text-xs italic">{errors.username.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
          type="email"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 8, message: 'Password must be at least 8 characters long' },
          })}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
          type="password"
          placeholder="Password"
        />
        {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
      </div>
      <div className="">
        <button
          className="w-full my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Register
        </button>
        <Link href="/login">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            
          >
            Login
          </button>
          </Link>
      </div>
    </form>
    </div>
  );
};

export default RegisterForm;
