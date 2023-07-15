import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import CartItem from '../Components/CartItem';

const Cart = () => {
  const cartItems = useSelector((state)=>state.cart);
  const [amount, setAmount] = useState(0);
  // console.log(cartItems);
  const navigate = useNavigate();

  function totalAmount(){
    setAmount(cartItems.reduce(((total, value)=>total+value.price), 0));
  }

  useEffect(()=>{
    totalAmount()
  },[cartItems]);

  return (
    <div>
      {
        cartItems.length===0 ? <div className='flex flex-col gap-4 justify-center items-center h-[90vh]'>
          <p className='text-xl font-bold text-slate-700'>Your Cart is Empty!</p>
          <button onClick={()=>navigate('/')} className='bg-green-700 text-white px-6 py-2 rounded-md 
          text-lg font-bold hover:bg-green-500'
          >Shop Now</button>
        </div>:
        <div className='flex w-9/12 mx-auto justify-start gap-[6rem] my-10'>
          <div className='w-[55%] flex flex-col gap-2'>
            {
              cartItems.map((item, index)=>{
                return <CartItem key={item.id} item={item} index={index}/>
              })
            }
          </div>

          <div className='flex flex-col justify-start pt-[7rem] sticky top-0 h-fit'>
            <h3 className='text-xl font-bold text-green-800'>YOUR CART</h3>
            <h2 className='text-green-600 text-5xl font-bold'>SUMMARY</h2>
            <p className='text-xl font-semibold my-4'>Total Items: {cartItems.length}</p>
            <div className='mt-10'>
              <p className='text-xl font-semibold mb-4'>Total Amount: <span className='font-bold'>${amount}</span></p>
              <button className='bg-green-600 w-full py-2 text-white rounded-md font-bold text-lg border border-green-600
              hover:bg-green-200 hover:text-black transition-all duration-300'>Checkout Now</button>
            </div>

          </div>
        </div>
      }
    </div>
  )
}

export default Cart