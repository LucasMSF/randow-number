import React from 'react';
import { useState } from 'react'

import mathImage from './assets/math.png';
import { isInteger, randomNumber } from './helpers/numbersHelper';

function App() {
  const [number, setNumber] = useState(0);
  const [range, setRange] = useState({ min: 0, max: 100, error: { min: false, max: false } });

  const handleClick = () => {
    setNumber(randomNumber(range.min, range.max));
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;

    let error = {
      ...range.error,
    };

    let errorState = false;

    if (!isInteger(Number(value))) errorState = true;

    error = {
      ...error,
      [name]: errorState,
    };

    setRange({ ...range, [name]: value, error });
  }

  return (
    <>
      <div className="App bg-zinc-800 w-full h-full flex flex-col items-center justify-center">
        {/* <h1>Teste</h1> */}
        <div className='w-3/4 h-5/6 rounded-xl bg-sky-50 shadow-sky-100 shadow-md lg:w-3/6 lg:h-3/4 xl:w-2/6 xl:h-4/6 flex flex-col items-center justify-center'>
          <h1 className='justify-self-start text-center font-sans font-bold text-xl lg:text-2xl xl:text-3xl'>Sort Number between
            <input onChange={handleChange} value={range.min} name='min' className={`w-16 mx-4 border-solid border-zinc-900 rounded-lg p-0.5 text-center focus:outline-0 focus:border-2 shadow-xl ${range.error.min && 'border-red-600'}`} type="text" />
            and
            <input onChange={handleChange} value={range.max} name='max' className={`w-16 mx-4 border-solid border-zinc-900 rounded-lg p-0.5 text-center focus:outline-0 focus:border-2 shadow-xl ${range.error.max && 'border-red-600'}`} type="text" /></h1>
          <span className='font-bold text-4xl my-6'>{number}</span>
          <button className={`bg-neutral-900 font-bold text-white p-4 rounded-lg hover:bg-neutral-700 transition duration-150 ${(range.error.min || range.error.max) && 'cursor-not-allowed'}`} disabled={(range.error.min || range.error.max)} onClick={handleClick}>
            {(range.error.min || range.error.max) ? 'Invalid Range' : 'Generate'}
          </button>
          <img className='w-2/4' src={mathImage} alt="math" />
        </div>
        <span className='text-center mt-8 font-sans font-bold text-lg lg:text-xl xl:text-2xl text-white'>By: Lucas MSF</span>
      </div>
    </>
  )
}

export default App