import React, { useState } from 'react'
import Header from './Header';
const Login = () => {
  
  const[isSignIn, setIsSignIn] = useState(true);
  
 
  return (
    <div>
      <Header/>
      <div className='absolute' >
      <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="Logo" />

      </div>
      <form className='w-3/12 absolute p-12 mx-auto my-28 bg-black left-0 right-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl'>{isSignIn?'Sign In':'Sign Up'}</h1>
        <input type="text" 
        placeholder='email Address'
        className='p-2 my-2 w-full bg-gray-700 rounded-sm'/>

        { !isSignIn && 
        <input type="text" 
        placeholder='Full Name'
        className='p-2 my-2 w-full bg-gray-700 rounded-sm'/> }   

        <input type="password" 
        placeholder='password'
        className='p-2 my-2 w-full bg-gray-700 rounded-sm'/>

        <button className='p-2 my-4 bg-red-600 w-full rounded'>{!isSignIn?'Sign Up':'Sign In'}</button>

        <p onClick={()=>{setIsSignIn(!isSignIn)}} className='text-underline cursor-pointer'>{isSignIn?'New to Netflix? SignUp':'Already existed? Sign In'}</p>

      </form>
    </div>
  
    
  )
}

export default Login;