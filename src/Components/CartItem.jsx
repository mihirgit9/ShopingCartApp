import React from 'react'
import {MdDelete} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { removeItem } from '../Redux/Slices/CartSlice';

const CartItem = ({item, index}) => {
  const dispatch = useDispatch();
  return (
    <div className={`flex gap-12 px-8  py-8 ${index!==0 ? 'border-t-2 border-slate-500' : ''}`}>
      <img src={item.image} alt={item.id} width={150}/>
      <div>
        <h2 className='text-[1.35rem] font-semibold text-slate-800'>{item.title}</h2>
        <p className='my-4 text-slate-500'>{item.description.split(" ").slice(0,15).join(" ")}...</p>
        <div className='flex justify-between items-center'>
          <p className='font-bold text-lg text-green-500'>${item.price}</p>
          <div onClick={()=>dispatch(removeItem(index))} className='p-3 rounded-full bg-red-300 text-red-800 cursor-pointer
          hover:bg-red-500 hover:text-white'>
            <MdDelete/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem