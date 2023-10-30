import React from 'react'
import {BsHeart,BsCart} from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { FiMenu } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { selectTotalQTY, setOpenCart } from '../app/CartSlice.js'
const Navbar = () => {
  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);
  const onCartToggle = () => {
      dispatch(setOpenCart({
        cartState: true 
      }))
  }
  return (
    <div className='fixed top-0 right-0 left-0 h-16 z-50 px-2 md:px-20 bg-black text-white p-3 flex items-center justify-between'>
        <div>
            <h1 className='font-bold text-4xl cursor-pointer'>Bata</h1>
        </div>
        <ul className='hidden md:flex gap-8'>
            <li className='text-white/70 cursor-pointer hover:text-white'>Home</li>
            <li className='text-white/70 cursor-pointer hover:text-white'>category</li>
            <li className='text-white/70 cursor-pointer hover:text-white'>About</li>
            <li className='text-white/70 cursor-pointer hover:text-white'>Contact Us</li>
        </ul>
        <div className='flex gap-2 items-end cursor-pointer'>
            <BsHeart className='h-7 w-7'/>
            <button type='button'  onClick={onCartToggle} className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
            <BsCart className='h-7 w-7'/>
            <div className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 bg-slate-100 text-slate-900 shadow-slate-100`}>{totalQTY}</div>  
            </button>
            <CgProfile className='h-8 w-8'/>
            <FiMenu className="h-8 w-8 md:hidden"/>
        </div>
    </div>
  )
}

export default Navbar