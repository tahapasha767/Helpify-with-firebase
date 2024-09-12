import React from 'react'

function Homepage() {
  return (
    <div className='text-white  mt-44'>
        <div className='flex flex-col float-left ml-6'>
       <span className='sm:text-7xl text-5xl font-bold '>Ease your work</span>
        <span className='sm:text-7xl text-5xl font-bold mt-4 text-cyan-400  '>with helipy</span>
        <div className='flex gap-4 my-9'>
            <div className='w-28 h-10  bg-transparent flex justify-center items-center rounded-3xl border-white border-[1px] text-white cursor-pointer hover:scale-105'>Sign In</div>
            <div className='w-28 h-10 text-black bg-white flex justify-center items-center rounded-3xl cursor-pointer hover:scale-105'>About us</div>
        </div>
        </div>


    </div>
  )
}

export default Homepage