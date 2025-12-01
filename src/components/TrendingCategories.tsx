import React from 'react';
import { HearderComponent } from './HearderComponent';

interface TrendingCategoriesProps {
  id: number;
  name: string;
  imageUrl: string;
}

export const TrendingCategories = () => {
  const categories: TrendingCategoriesProps[] = [
    { id: 1, name: "Mobiles", imageUrl: "/trendingCategories/1.png" },
    { id: 2, name: "Laptops", imageUrl: "/trendingCategories/2.png" },
    { id: 3, name: "Headphones", imageUrl: "/trendingCategories/3.png" },
    { id: 4, name: "Monitors & Tv", imageUrl: "/trendingCategories/4.png" },
    { id: 5, name: "Speakers", imageUrl: "/trendingCategories/5.png" },
  ];

  return (
    <div className="mt-5">
      <HearderComponent href="" title="Trending Categories" />

      {/* Responsive Categories */}
      <div
        className="
          grid grid-cols-2 
          sm:grid-cols-3 
          lg:grid-cols-5 
          gap-6 
          mt-6
          w-full
        "
      >
        {categories.map((category) => (
          <div
            key={category.id}
            className="
              cursor-pointer flex flex-col items-center gap-4 
              transition-transform duration-300 hover:scale-105
            "
          >
            <div className="w-full">
              <img
                src={category.imageUrl}
                alt={category.name}
                className="
                  w-full h-32 sm:h-36 lg:h-40 
                  object-contain bg-gray-100
                  rounded-xl p-3
                "
              />
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-center">
              {category.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};