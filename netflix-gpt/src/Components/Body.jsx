import React, { useEffect } from 'react'
import Browse from './Browse.jsx'
import Login from './Login.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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