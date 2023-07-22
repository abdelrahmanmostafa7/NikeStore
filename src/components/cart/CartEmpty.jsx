import React from 'react'
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const CartEmpty = ({ onCartToggle }) => {
    return (
        <div className='flex items-center justify-center flex-col h-screen px-11 text-center gap-7'>
            <h1 className='text-4xl sm:text-3xl font-bold  text-slate-900 filter drop-shadow-lg '>YOUR CART IS EMPTY!</h1>
            <button type='button' className='button-theme bg-gradient-to-b from-blue-500 to-sky-500 shadow-lg  flex items-center justify-center text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-110' 
                onClick={onCartToggle} >
                <ArrowLeftIcon className='w-5 h-5 text-slate-900' />
                <span className=''>Back To Nike Store</span>
            </button>
        </div>
    )
}

export default CartEmpty