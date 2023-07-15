import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartItems = useSelector((state)=>state.cart);
  return (
    <div className=' bg-slate-900 w-full'>
        <div className='flex justify-between items-center w-9/12 mx-auto py-2'>
            <NavLink to={'/'}>
                <img alt='logo' src={logo} width={150}/>
            </NavLink>

            <div className='flex gap-6 items-center text-white text-lg relative'>
                <NavLink to={'/'} className='hover:text-green-500 transition-all'>Home</NavLink>

                <NavLink to={'/cart'}>
                    <FaShoppingCart className=' text-2xl hover:text-green-500 transition-all'/>
                </NavLink>
                {
                    cartItems.length>0 &&
                    <div className='bg-green-700 rounded-full px-2 text-sm absolute right-[-15px] top-[-5px] animate-bounce'
                    >{cartItems.length}</div>
                }
            </div>
        </div>
    </div>
    
  )
}

export default Navbar