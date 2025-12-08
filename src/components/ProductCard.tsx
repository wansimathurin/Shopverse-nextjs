import React from 'react'
import { Product } from './PopularProducts'
import { FaStar } from 'react-icons/fa6'
import { FaStarHalfAlt } from 'react-icons/fa'
import { TiHeartFullOutline } from 'react-icons/ti'
import { useStoreFavorite } from '@/store/favorite.store'

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const {selectedFavoriteIds,toggleHeartIcon} = useStoreFavorite()
  return (
    <div className='h-[400px] w-[300px] ring ring-gray-200 rounded-[50px] 
      flex items-center justify-center flex-col gap-2 overflow-hidden group 
      relative cursor-pointer p-5'>

      <img src={product.image} alt="" className='w-[70%]' />

      <div className='flex gap-2'>
        <FaStar size={20} color='gold' />
        <FaStar size={20} color='gold' />
        <FaStar size={20} color='gold' />
        <FaStarHalfAlt size={20} color='gold' />
      </div>

      <h1 className='text-2xl font-bold'>{product.title.slice(0, 10)}</h1>

      <div className='flex gap-2'>
        <h2 className='text-[#FF6900] text-xl'>${product.price}</h2>
        <span className='line-through text-gray-400'>{product.oldPrice}</span>
      </div>

      {/* Add to Cart button */}
      <button
        className={`bg-orange-500 text-white px-6 py-3 
        rounded-full absolute bottom-5 transition-all
        duration-300 opacity-0 translate-y-5 
        group-hover:opacity-100 group-hover:translate-y-0`}
      >
        Add to Cart
      </button>

      {/* Heart hover */}
      <div
        className={` ${selectedFavoriteIds.includes(product._id)?'bg-gray-400':'bg-orange-500'}  p-2 rounded-full
        absolute top-5 right-5 flex items-center justify-center`}
        onClick={() => toggleHeartIcon(product._id)}
      >
        <TiHeartFullOutline
          size={30}
          color={selectedFavoriteIds.includes(product._id) ? "red": "#fff"}
          className="hover:scale-125 transition-all duration-300"
        />
      </div>

    </div>
  )
}