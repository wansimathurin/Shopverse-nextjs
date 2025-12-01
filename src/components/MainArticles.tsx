import React from "react";

type MainArticle = {
  id: number;
  title: string;
  imageUrl: string;
  discount: string;
};

export const MainArticles = () => {
  const mainArticles: MainArticle[] = [
    {
      id: 1,
      title: "Nike, Adidas",
      imageUrl: "/mainArticles/1.png",
      discount: "MIN 40% OFF",
    },
    {
      id: 2,
      title: "PlayStation 5",
      imageUrl: "/mainArticles/2.png",
      discount: "MIN 30% OFF",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 w-full">
      {mainArticles.map((article) => (
        <div
          key={article.id}
          className="
            h-[350px] md:h-[400px] ring ring-gray-200 rounded-[40px]
            flex flex-col gap-3 p-5 items-center justify-center relative
            cursor-pointer overflow-hidden group
            transition-all duration-300
          "
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            {article.title}
          </h1>

          <span className="text-sm md:text-base">{article.discount}</span>

          <img
            src={article.imageUrl}
            alt=""
            className="w-[70%] md:w-[80%] object-contain"
          />

          {/* Button Hover Effect */}
          <button
            className="
              bg-orange-500 text-white px-6 py-2 md:py-3 rounded-full
              absolute bottom-5
              transition-all duration-300 opacity-0 translate-y-5
              group-hover:opacity-100 group-hover:translate-y-0
            "
          >
            Shop Now
          </button>
        </div>
      ))}
    </div>
  );
};