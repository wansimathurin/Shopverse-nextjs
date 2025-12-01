"use client";
import React, { useEffect, useState } from "react";

export const HeroComponent = () => {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSmall(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        hero-bg rounded-[50px] overflow-hidden 
        transition-all duration-500 ease-in-out
      `}
    >
      <div
        className={`
          p-10 relative transition-all duration-500 ease-in-out
          ${isSmall ? "h-[400px]" : "h-[650px]"}
        `}
      >
        {/* LEFT TEXT */}
        <div
          className={`
            text-white flex flex-col gap-2 justify-center h-full max-w-lg
            transition-all duration-500
            ${isSmall ? "scale-90 translate-y-[-20px]" : "scale-100"}
          `}
        >
          <span className="uppercase text-2xl">Sale up to 20% off</span>
          <h1 className="font-extrabold text-[50px]">Apple Watch Ultra 2</h1>
          <p>
            The most rugged and capable Apple Watch pushes the limits again.
            Featuring the all-new S9 SiP.
          </p>

          <div className="flex gap-5 mt-5">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full cursor-pointer">
              Shop Now
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-full">
              Learn More
            </button>
          </div>
        </div>

        {/* IMAGES */}
        <img
          src="/hero-wt1.png"
          alt="hero image"
          width={"35%"}
          className={`
            absolute right-[250px] top-0 transition-all duration-500
            ${isSmall ? "scale-75 translate-y-10" : "scale-100"}
          `}
        />

        <img
          src="/hero-wt2.png"
          alt="hero image"
          width={"20%"}
          className={`
            absolute right-0 top-0 transition-all duration-500
            ${isSmall ? "scale-75 translate-y-10" : "scale-100"}
          `}
        />
      </div>
    </div>
  );
};