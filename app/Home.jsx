// src/App.js
"use client"
import Modal from '@/components/Modal';
import TodoTask from '@/components/Todotask';
import React, { useState } from 'react';


const Home = () => {
  const [todos, setTodos] = useState([
    // Your initial todo data (you can replace this with your actual data)
    { id: 1, title: 'Sample Todo 1', description: 'This is a sample todo.', dueDate: '2023-07-30' },
    { id: 2, title: 'Sample Todo 2', description: 'Another sample todo.', dueDate: '2023-08-05' },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [task, setTask] = useState(false);

  const handleAddTodo = (todo) => {
    // Update the todos array with the new todo
    setTodos([...todos, { ...todo, id: todos.length + 1 }]);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Todo Tasks</h2>
      <button
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded mb-4"
        onClick={() => setModalOpen(true)}
      >
        Add Todo
      </button>

      {todos.map((item) => (
        <TodoTask key={item.id} task={item} handelUpdate={()=>{
            setTask(task)
            setModalOpen(true)
        }} />
      ))}

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} onSubmit={handleAddTodo} />
    </div>
  );
};

export default Home;
