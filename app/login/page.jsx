// src/components/LoginForm.js
"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link'  
export default function LoginForm  (){
    const { register  , handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
      // Handle the form submission here
      console.log(data);
    };
  
    return (
        <div className="flex items-center justify-center h-screen ">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-4/12">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            {...register('username', { required: 'Username is required' })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.username ? 'border-red-500' : ''}`}
            type="text"
            placeholder="Username"
          />
          {errors.username && <p className="text-red-500 text-xs italic">{errors.username.message}</p>}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            {...register('password', { required: 'Password is required' })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
            type="password"
            placeholder="Password"
          />
          {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
        </div>
        <div >
        
        <button
            className="my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Login
          </button>
      
          <Link href="/register">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            
          >
            Register
          </button>
          </Link>
        </div>
      </form>
      </div>
    );
  };


