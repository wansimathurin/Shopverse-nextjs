"use client";
import React from "react";
import { Navbar } from "@/components/Navbar";
import { useCartStore } from "@/store/cart.store";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiMinus, FiPlus } from "react-icons/fi";

const Page = () => {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
    getTotalPrice,
    getTotalItems,
  } = useCartStore();

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  return (
    <>
      <Navbar />

      <div className="px-6 md:px-12 lg:px-20 py-10 mt-16">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            My Cart 🛒
          </h1>

          {cart.length > 0 && (
            <button
              onClick={clearCart}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"
            >
              <RiDeleteBin5Line />
              Clear Cart
            </button>
          )}
        </div>

        {/* CONTENT */}
        {cart.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-10 mt-10">
            {/* LEFT - CART ITEMS */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col md:flex-row items-center gap-6 ring ring-gray-300 p-4 rounded-2xl shadow-md"
                >
                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[120px] h-[120px] object-cover rounded-xl"
                  />

                  {/* INFO */}
                  <div className="flex-1 w-full">
                    <h2 className="font-semibold text-lg line-clamp-2">
                      {item.title}
                    </h2>

                    <p className="text-amber-600 font-bold text-xl mt-2">
                      ${item.price}
                    </p>

                    {/* QUANTITY CONTROL */}
                    <div className="flex items-center gap-3 mt-4">
                      <button
                        onClick={() => decreaseQty(item._id)}
                        className="p-2 border rounded-lg hover:bg-amber-500"
                      >
                        <FiMinus />
                      </button>

                      <span className="font-bold text-lg">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQty(item._id)}
                        className="p-2 border rounded-lg hover:bg-amber-500"
                      >
                        <FiPlus />
                      </button>
                    </div>
                  </div>

                  {/* REMOVE */}
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <RiDeleteBin5Line size={24} />
                  </button>
                </div>
              ))}
            </div>

            {/* RIGHT - SUMMARY */}
            <div className="ring ring-amber-600 p-6 rounded-2xl shadow-md h-fit">
              <h2 className="text-2xl font-bold mb-5">Order Summary</h2>

              <div className="flex justify-between mb-3">
                <span>Total Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between mb-3">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between mb-3">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <button className="mt-6 w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl font-semibold transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          /* EMPTY STATE */
          <div className="flex flex-col items-center justify-center mt-20 text-center">
            <h2 className="text-2xl font-semibold">
              Your cart is empty 🛒
            </h2>
            <p className="text-gray-500 mt-2">
              Add products to your cart to continue shopping
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Page;