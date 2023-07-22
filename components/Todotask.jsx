// src/components/TodoTask.js
import React from 'react';

const TodoTask = ({ title ="Title" , description = "Description" , handelUpdate }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 w-60 m-5">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-bold text-black">{title}</h3>
        
       
      </div>
      <p className="text-gray-700 line-clamp-3" >{description}</p
      >
      <div className='flex flex-col gap-2 my-3'>
        <button
          className="  bg-green-500 p-2 rounded-md "
          onClick={handelUpdate}
          
        >
          Update
        </button>
        <button
          className="bg-red-500 p-2 rounded-md "
          
        >
          Delete
        </button>   
        </div>

    </div>
  );
};

export default TodoTask;
