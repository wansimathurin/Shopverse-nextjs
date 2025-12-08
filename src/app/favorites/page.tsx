"use client";
import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { useStoreFavorite } from "@/store/favorite.store";
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from "axios";
import { Product } from "@/components/PopularProducts";
import { CiHeart } from "react-icons/ci";

const Page = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { selectedFavoriteIds, toggleHeartIcon, clearAll } = useStoreFavorite();
  const fetchProducts = async () => {
    await axios
      .get(
        "https://fakestoreapiserver.reactbd.org/api/walmartproducts?page=1&perPage=20"
      )
      .then((result) => {
        console.log(result?.data);
        setProducts(result?.data?.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const favProducts = products.filter((product) =>
    selectedFavoriteIds.includes(product._id)
  );
  return (
    <>
      <Navbar />
      <div className="p-10 mt-15">
        <div className="flex w-full justify-between items-center">
          <h1 className="text-3xl font-extrabold">My Favorites</h1>
          <button
            className="text-amber-600  font-bold cursor-pointer flex items-center gap-1"
            onClick={() => clearAll()}
          >
            <RiDeleteBin5Line /> Clear All
          </button>
        </div>
        <div className="flex flex-wrap gap-10 mt-5">
          {favProducts.length > 0 ? (
            favProducts.map((product) => (
              <div
                key={product._id}
                className=" w-[300px] ring ring-gray-400 flex items-center  flex-col  overflow-hidden p-4 gap-5 justify-between"
              >
                <img src={product.image} alt="" width={"100%"} />
                <button
                  onClick={() => toggleHeartIcon(product._id)}
                  className="bg-amber-600 py-3 px-5 w-full cursor-pointer flex items-center justify-center gap-1"
                >
                  <CiHeart size={30} />
                  Remove
                </button>
              </div>
            ))
          ) : (
            <div>No favorite products added.</div>
          )}
        </div>
      </div>
    </>
  );
};
export default Page;
