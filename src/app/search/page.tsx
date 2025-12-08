"use client";
import { Navbar } from "@/components/Navbar";
import { Product } from "@/components/PopularProducts";
import { ProductCard } from "@/components/ProductCard";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const query = useSearchParams().get("query");
  console.log("Search Query:", query);
  const [products, setProducts] = useState<Product[]>([]);
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
  const searchResult = products.filter((product) =>
    product.title.toLowerCase().includes(query?.toLowerCase() || "")
  );
  return (
    <div>
      <Navbar />
      <div className="p-10 mt-20">
        <h1 className="text-3xl font-bold mb-5">
          {`Search Results for "${query}"`}
        </h1>
              <div className="flex gap-10 flex-wrap">
                   {searchResult.length > 0 && searchResult.map(product=> <ProductCard key={product?._id} product={product} />)}
        </div>
      </div>
    </div>
  );
};
export default Page;
