import React, { useState } from 'react'
import HotelList from './HotelList'

function index() {
  const [min, setMin] = useState(undefined)
  const [max, setMax] = useState(undefined)
  return (
    <div className=' w-full dark:bg-[#121212] py-5 flex justify-between px-20 '>
      {/* search form */}
      <div className='bg-yellow-300 w-fit h-fit flex flex-col gap-2 rounded-lg p-4'>
        <h1>Destination</h1>
        <input type="text" placeholder='Madrid' className='rounded-lg p-2' />

        <h1>Check-In Date</h1>
        <input type="text" placeholder='Madrid' className='rounded-lg p-2' />

        <h1>Options</h1>

        {/* inputs container */}
        <div className='flex flex-col gap-5 '>
          <div className='flex gap-4'>
            <h1>Min pice per night</h1>
            <input type="number" onChange={(e) => setMin(e.target.value)} />

          </div>

          <div className='flex gap-4'>
            <h1>Max pice per night</h1>
            <input type="number" onChange={(e) => setMax(e.target.value)} />

          </div>

          <div className='flex gap-4'>
            <h1>Min pice per night</h1>
            <input type="text" />

          </div>

          <div className='flex gap-4'>
            <h1>Min pice per night</h1>
            <input type="text" />

          </div>

          <div className='flex gap-4'>
            <h1>Min pice per night</h1>
            <input type="text" />
          </div>
        </div>

        <button className='bg-blue-600  text-lg p-2 px-4 mx-2 rounded-lg' >search</button>
      </div>
      <HotelList min={min} max={max} />
    </div>
  )
}

export default index