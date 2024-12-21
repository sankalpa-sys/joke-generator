'use client'

import React, {useState} from 'react';
import Image from "next/image";
import JokeType from "@/components/JokeType";

type TJoke = {
    setup: string
    punchline: string,
    type: string,
    id: number
}
function JokeGeneratorForm() {
    const [joke, setJoke] = useState<TJoke | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [selectedType, setSelectedType] = useState<string>("general")

    const selectTypeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedType(e.target.value)
    }

    console.log(selectedType)

    const submitHandler = async(e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
       try {
           const res = await fetch(`https://official-joke-api.appspot.com/jokes/${selectedType}/random`)
           const joke = await res.json()
           setJoke(joke[0])
       }catch(e){
           console.log(e)
       }finally{
           setLoading(false)
       }
    }

    const gotoMyWebsite = () => {
        window.open('https://sankalpaneupane.com.np', '_blank')
    }
    return (
        <form onSubmit={submitHandler} className='bg-gradient-to-r from-gray-200 to-gray-300 p-10 rounded-sm'>
            <h3 className='font-bold text-lg '>Click <span className='text-purple-600'>GENERATE JOKE</span> to get started</h3>
            <div className='pb-10 pt-4'>
                <select onChange={selectTypeHandler} value={selectedType} className='py-2 px-4 text-sm outline-none bg-gray-100 rounded-md w-full border border-red-400'>
                    <option disabled value="">Select Joke Type</option>
                    <option value="general">General</option>
                    <option value="programming">Programming</option>
                    <option value="knock-knock">Knock Knock</option>
                    <option value="dad">Dad</option>
                </select>
            </div>
            {joke && (
                <div className='pb-10 text-lg'>
                    <h4 className='pb-4 font-semibold'>Setup: {joke?.setup}</h4>
                    <div className='italic flex items-center gap-2'>
                        <Image src='/send.svg' width={20} height={20} alt='punchline icon'
                        />
                        <p>{joke?.punchline}</p>
                    </div>
                    <div className='pt-2 flex items-center justify-between pl-6'>
                       <JokeType type={joke.type}  />
                    </div>
                </div>
            )}
            <button disabled={loading} className='btn' type='submit'>
                {loading ? 'GENERATING JOKE...' : 'GENERATE JOKE'}
            </button>

            <p onClick={gotoMyWebsite} className='text-center text-balance mt-10 text-sm text-gray-600 cursor-pointer hover:underline'>Developed by Sankalpa Neupane</p>
        </form>
    );
}

export default JokeGeneratorForm;