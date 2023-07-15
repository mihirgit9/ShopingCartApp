import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addItem, removeItem } from '../Redux/Slices/CartSlice';

const ProductCard = ({product}) => {

    const [added, setAdded] = useState(false);
    const [index, setIndex] = useState(0);
    const dispatch = useDispatch();
    const cartItems = useSelector((state)=>state.cart);

    function matchCart(){
        setAdded(false);
        cartItems.forEach((element, index) => {
            if(product.id===element.id){
                setAdded(true);
                setIndex(index);
                return
            }
        });  
    }

    useEffect(()=>{
        matchCart();
    },[cartItems])

    function addToCart(){
        // setAdded(!added);    Already handelled by matchCart()
        dispatch(addItem(product));
        toast.success("Item added to the cart");
    }
    function removeFromCart(){
        // setAdded(!added);    Already handelled by matchCart()
        dispatch(removeItem(index));
        toast.warn("Item removed from the cart");
    }

  return (
    <div className='flex flex-col gap-4 justify-between items-center shadow-[0_0_6px_0_rgba(0,0,0,0.30)] rounded-lg 
    py-4 px-4 hover:scale-[1.1] transition-all duration-300 hover:shadow-[0_0_100px_0_rgba(0,0,0,0.40)]'>
        <div className='flex flex-col gap-4 justify-between items-center'>
            <h1 className='text-lg font-semibold text-slate-800'>{product.title.split(" ").slice(0, 3).join(" ").slice(0, 17)}...</h1>
            <p className=' text-xs text-slate-400 w-[75%]'>{product.description.split(" ").slice(0, 10).join(" ")}...</p>
        </div>
        
        <img src={product.image} alt='productImg' width={140}/>

        <div className='flex justify-between items-center w-full'>
            <p className='text-green-500 font-medium'>${product.price}</p>

            <div className='rounded-full border border-slate-500 px-2 py-1 text-[0.8rem] text-slate-500 
            font-bold hover:bg-slate-500 hover:text-slate-100 transition-all'>
                {
                    added? <button onClick={removeFromCart}>REMOVE ITEM</button>:
                    <button onClick={addToCart}>ADD TO CART</button>
                }
            </div>
            
            
        </div>
    </div>
  )
}

export default ProductCard