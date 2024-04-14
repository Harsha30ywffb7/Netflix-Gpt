import React, { useState, useRef } from 'react'
import Header from './Header.jsx';
import { checkValidData } from '../utils/validate.js';
import { auth } from '../utils/firebase.js';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.js';
const Login = () => {

  const [isSignIn, setIsSignIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate()
  const dispatcher = useDispatch()

  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const handleButtonClick = () => {

    const message = checkValidData(email.current.value, password.current.value)
    setErrorMessage(message)

    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {

          const user = userCredential.user;
          console.log(user)
          //update user profile by api when login


          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://lh3.googleusercontent.com/ogw/AF2bZyhVdWA8v05hSq-g2PyIxaoQBpAiYkSoz9Yib3nx5veulgI=s32-c-mo"
          }).then(() => {
            // add updated details of profile and displayname to redux store.
            const { uid, displayName, profile, photoURL } = auth.currentUser;
            dispatcher(addUser(
              { uid: uid, displayName: displayName, profile: profile, photoURL: photoURL }))
            navigate('/browse')
          }).catch((error) => {
            setErrorMessage(error.message)
          });

          console.log(user);

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + "  " + errorCode)
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          navigate('/browse')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage + "  " + errorCode)
        });
    }

  }

  return (
    <div className=''>
      <Header />
      <div className='absolute' >
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="Logo" />

      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='w-3/12 absolute p-12 mx-auto my-28 bg-black left-0 right-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl'>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>


        {!isSignIn &&
          <input type="text" ref={name}
            placeholder='Full Name'
            className='p-2 my-2 w-full bg-gray-700 rounded-sm text-sm ' />}


        <input type="text" ref={email}
          placeholder='Email address'
          className='p-2 my-2 w-full bg-gray-700 rounded-sm text-sm' />


        <input type="password" ref={password}
          placeholder='Password'
          className='p-2 my-2 w-full bg-gray-700 rounded-sm text-sm' />

        <p className="text-red-700 text-sm">{errorMessage}</p>

        <p></p>
        <button className='p-2 my-4 bg-red-600 w-full rounded' onClick={handleButtonClick}>{!isSignIn ? 'Sign Up' : 'Sign In'}</button>

        <p onClick={() => { setIsSignIn(!isSignIn) }} className='text-decoration-line underline cursor-pointer'>{isSignIn ? 'New to Netflix? SignUp' : 'Already existed? Sign In'}</p>

      </form>
    </div>
  )
}

export default Login;