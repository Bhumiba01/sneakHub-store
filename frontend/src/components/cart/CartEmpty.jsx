import React from 'react'
import { BsArrow90DegLeft } from 'react-icons/bs'
import emptyBag from '../../assets/Shoes/emptybag.png'
const CartEmpty = () => {
  return (
    <div className='flex items-center justify-center flex-col h-screen px-11 text-center gap-7'>
        <img src={emptyBag} alt="" className='w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 scale-110' />
        <button type='button' className='bg-gradient-to-b rounded transition-all duration-100 ease-in-out  sm:text-sm from-amber-500 to-orange-500 shadow-lg shadow-orange-500 flex items-center justify-center text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-110'>
            <BsArrow90DegLeft className='w-5 h-5 text-white'/>
            <span className=''>Back to Nike Store</span>
        </button>
    </div>
  )
}

export default CartEmpty