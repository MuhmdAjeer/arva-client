import { Heart, Star } from "lucide-react";
import React from "react";

interface IProps {
  image: string;
  name: string;
  rating: number;
  reviews: number;
}

const ShopCard = ({ image, name, rating, reviews }: IProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={image} alt={name} />
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
          <Heart className="text-gray-600" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="flex items-center text-sm text-gray-600">
          <Star className="text-yellow-500" />
          <span className="ml-1">{rating}</span>
          <span className="ml-2">{reviews} reviews</span>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
