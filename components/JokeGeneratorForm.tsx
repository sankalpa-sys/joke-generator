'use client'

import React, {useState} from 'react';
import Image from "next/image";

type TJoke = {
    setup: string
    punchline: string,
    type: string,
    id: number
}
function JokeGeneratorForm(props) {
    const [joke, setJoke] = useState<TJoke | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const submitHandler = async(e) => {
        e.preventDefault()
        setLoading(true)
       try {
           const res = await fetch("https://official-joke-api.appspot.com/random_joke")
           const joke = await res.json()
           setJoke(joke)
       }catch(e){
           throw new Error(e)
       }finally{
           setLoading(false)
       }
    }
    const gotoMyWebsite = () => {
        window.open('https://sankalpaneupane.com.np', '_blank')
    }
    return (
        <form onSubmit={submitHandler} className='bg-gradient-to-r from-gray-200 to-gray-300 p-10'>
            <h3 className='font-bold text-lg pb-10'>Welcome to LaughLine, Click <span className='text-blue-600'>GENERATE JOKE</span> to get started</h3>

            {joke && (
                <div className='pb-10 text-lg'>
                    <h4 className='pb-2 font-semibold'>Setup: {joke?.setup}</h4>
                    <div className='italic flex items-center gap-2'>
                        <Image src='/send.svg' width={20} height={20} alt='punchline icon'
                        />
                        <p>{joke?.punchline}</p>
                    </div>
                </div>
            )}
            <button disabled={loading} className='btn' type='submit'>
                {loading ? 'GENERATING JOKE...' : 'GENERATE JOKE'}
            </button>

            <p onClick={gotoMyWebsite} className='text-center text-balance pt-10 text-sm text-gray-600 cursor-pointer hover:underline'>Developed by Sankalpa Neupane</p>
        </form>
    );
}

export default JokeGeneratorForm;