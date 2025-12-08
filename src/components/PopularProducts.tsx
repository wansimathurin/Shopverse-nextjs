'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { HearderComponent } from './HearderComponent'
import { ProductCard } from './ProductCard'


export interface Product {
    _id: number;
    title: string;
    des: string;
    price: number;
    oldPrice: number;
    rating: number;
    image: string,
    brand: string,
    isNew: boolean,
    category: string
}
export const PopularProducts = () => {
    const [products, setProducts] = useState<Product[]>([])
    const fetchProducts = async() => {
        await axios.get('https://fakestoreapiserver.reactbd.org/api/walmartproducts?page=1&perPage=20').then(result => {
            console.log(result?.data)
            setProducts(result?.data?.data)
        }).catch(error=>console.log(error))
    }
     useEffect(() => {
         fetchProducts();     
     }, [])
        console.log('products',products[1]?.title)
  return (
      <div className='mt-2'>
          <HearderComponent href={''} title='Popular Products' />
          <div className='flex gap-10 flex-wrap'>
             {products.map(product=> <ProductCard key={product?._id} product={product} />)}
              
          </div>
    </div>
  )
}
