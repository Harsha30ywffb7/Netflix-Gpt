import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_URL } from './constants';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  // const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  
  return (
    <div className=''>
      <div className=' flex justify-between w-screen absolute px-8 mb-5 bg-gradient-to-b from-black z-10' >
        <div>
          <img className="w-36" src={LOGO_URL} alt="Header-logo" />
        </div>
        
          {user &&  <div className='flex justify-between mx-4 align-middle '>
            <p className=' font-bold mt-4 mx-5 '>{user?.displayName}</p>
            <img className="w-8 h-8 mt-4" src= {user?.photoURL}
              alt="userLogo" />

            <button className='text-white  bg-red-600 m-4 mt-4 rounded-md px-1' onClick={handleSignout}>Signout</button>
          </div>}
      </div>
    </div>

  )
}

export default Header;