import React from 'react'

export default function Card() {
  return (
    <div className='relative w-full h-full bg-white rounded-[1rem] border-2 border-black'>
      <div className='p-4 flex flex-col gap-y-4'>
        <div className='h-[200px] w-full bg-amber-400 rounded-[1rem]'></div>
        <h5 className='bg-amber-400 w-fit px-4 py-1 italic font-bold rounded-md'>Expense Tracking</h5>
      </div>
      <div className='-z-10 absolute w-full h-full bg-black/90 top-4 left-4 rounded-[1rem]'/>
    </div>
  )
}
