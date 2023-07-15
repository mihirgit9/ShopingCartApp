import React, { useEffect, useState } from 'react'
import Buffering from '../Components/Buffering'
import axios from 'axios';
import ProductCard from '../Components/ProductCard';

const Home = () => {
    const [buffering, setBuffering] = useState(false);
    const [products, setProducts] = useState([]);
    const url= "https://fakestoreapi.com/products";

    async function fetchProduct(url){

        setBuffering(true);

        try{
            const {data} = await axios.get(url);
            // console.log(data);
            setProducts(data);
        }
        catch(err){
            alert(err.message);
            setProducts([]);
        }

        setBuffering(false);
    }

    useEffect(()=>{
        fetchProduct(url);
    },[])

  return (

    <div className=' w-9/12 mx-auto my-10'>
        {
            buffering ? (<Buffering/>) :
            products.length>0 ? <div className=' grid grid-cols-4 gap-x-6 gap-y-10'>
                {
                    products.map((product)=>{
                        return <ProductCard key={product.id} product={product}/>
                    })
                }
            </div>:
            <p className='flex justify-center items-center h-[80vh]'>No Products Available</p>
        }
    </div>
  )
}

export default Home