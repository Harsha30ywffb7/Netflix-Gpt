import React from 'react'
import { BG_URL } from './constants'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchbar = () => {

    const langIdentifier = useSelector(state=> state.config.lang)
    return (

        <div>
            <div className='absolute -z-10'>
                <img src={BG_URL} alt="Logo" />
            </div>
            <div className='pt-[10%] mx-auto'>
                <form className=' w-1/2 grid grid-cols-12 bg-black mx-auto'>
                    <input type='text' className='p-4 m-2 col-span-9 rounded-md' placeholder={lang[langIdentifier].gptSearchPlaceholder} />
                    <button className='bg-red-700 col-span-3 p-4 m-2 text-white text-xl rounded-md'>{lang[langIdentifier].search}</button>
                </form>
            </div>
        </div>
    )
}

export default GptSearchbar