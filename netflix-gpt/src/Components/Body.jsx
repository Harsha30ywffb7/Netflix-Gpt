import React from 'react'
import Browse from './Browse.jsx'
import Login from './Login.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { auth } from '../utils/firebase.js'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice.js'

const Body = () => {

  const dispatcher = useDispatch();
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

  onAuthStateChanged(auth, (user) => {
    if (user) {
      //if user signin or signup
      const { uid, displayName, profile, photoURL } = user;
      dispatcher(addUser(
        { uid: uid, displayName: displayName, profile: profile, photoURL: photoURL }))
    } else {
      // User is signed out
      dispatcher(removeUser());
    }
  });

  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  )
}

export default Body