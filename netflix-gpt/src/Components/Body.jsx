import React, { useEffect } from 'react'
import Browse from './Browse.jsx'
import Login from './Login.jsx'
import BackGroundImage from '../assets/backGroundImage.jpg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { auth } from '../utils/firebase.js'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice.js'

const Body = () => {

  
  const appRoute = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/browse',
      element: <Browse />
    }
  ])


  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  )
}

export default Body