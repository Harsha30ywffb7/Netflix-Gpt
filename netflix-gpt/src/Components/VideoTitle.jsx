import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pl-8 mx-6 w-screen pt-[20%] absolute text-white aspect-video bg-gradient-to-r to-black'>
        <p className='text-5xl font-bold'>{title}</p>
        <p className='mt-4 w-1/3'>{overview}</p>

        <button className='px-10 py-2 text-xl mt-4 bg-white rounded-md m-2 text-black hover:bg-opacity-80'>Play</button>
        <button className='px-10 py-2 text-xl mt-4 bg-gray-400 bg-opacity-30 hover:bg-opacity-45 rounded-md m-2 text-white'>Info</button> 
    </div>
  )
}

export default VideoTitle