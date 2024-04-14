import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate()
  const user = useSelector(state=>state.user)
  
  const handleSignout = () => {

    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className=''>
      <div className=' flex justify-between w-screen absolute px-8 mb-5 bg-gradient-to-b from-black z-10' >
        <div>
          <img className="w-36" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Header-logo" />
        </div>
        
          {user &&  <div className='flex justify-between mx-4 align-middle '>
            <p className='text-xl text-bold mt-4 mx-5 '>{user?.displayName}</p>
            <img className="w-8 h-8 mt-2 rounded-full" src= {user?.photoURL}
              alt="userLogo" />

            <button className='text-white  bg-red-600 m-3 mt-2 rounded-md px-1 py-0' onClick={handleSignout}>Signout</button>
          </div>}
      </div>
    </div>

  )
}

export default Header;