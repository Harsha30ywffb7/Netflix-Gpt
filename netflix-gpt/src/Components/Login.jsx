import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

  const[isSignIn, setIsSignIn] = useState(false);
  const[errorMessage, setErrorMessage]= useState('');
  

  const handleButtonClick =()=>{
    setIsSignIn(!isSignIn);
  }
  
  return (
    <div className=''>
      <Header/>
      <div className='absolute' >
      <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="Logo" />

      </div>
      <form 
      onSubmit={(e)=>e.preventDefault()}
      className='w-3/12 absolute p-12 mx-auto my-28 bg-black left-0 right-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl'>{isSignIn?'Sign In':'Sign Up'}</h1>

        
        { !isSignIn && 
        <input type="text" 
        placeholder='Full Name'
        className='p-2 my-2 w-full bg-gray-700 rounded-sm text-sm ' /> }   


        <input type="text"
        placeholder='Email address'
        className='p-2 my-2 w-full bg-gray-700 rounded-sm text-sm'/>


        <input type="password"
        placeholder='Password'
        className='p-2 my-2 w-full bg-gray-700 rounded-sm text-sm'/>

        <p className="text-red-700 text-sm">{errorMessage}</p>

        <p></p>
        <button  className='p-2 my-4 bg-red-600 w-full rounded' onClick={handleButtonClick}>{!isSignIn?'Sign Up':'Sign In'}</button>

        <p onClick={()=>{setIsSignIn(!isSignIn)}} className='text-decoration-line underline cursor-pointer'>{isSignIn?'New to Netflix? SignUp':'Already existed? Sign In'}</p>

      </form>
    </div>
  )
}

export default Login;