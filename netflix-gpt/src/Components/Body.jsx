import React, { useEffect } from 'react'
import Login from './Login';
import Browse from './Browse';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
const Body = () => {

  const dispatch = useDispatch();

   const appRoute = createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browse",
      element:<Browse/>
    }
   ]);

   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid, email, displayName,photoURL} = user;
        dispatch(addUser({uid:uid, email: email, displayName:displayName, photoURL:photoURL}));
        // ...
      } else {
        // User is signed out
        dispatch(removeUser);
      }
    },[]);
   })
  return (
    <div>
      <RouterProvider router= {appRoute}/>
    </div>
  )
}

export default Body;