"use client"
import React from 'react'
import { useSelector } from 'react-redux';
import Home from './Home';
import Login from './login/page';
export default function App() {
  const user = useSelector((state) => state.user.user);
  return (
    <React.Fragment>
      {!user ? <Home /> : <Login />}
    </React.Fragment>
  )
}
