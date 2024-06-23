import React from "react";
import { Skeleton } from "../ui/skeleton";

const SkeletonShopCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="relative">
        <Skeleton className="w-full h-48 object-cover" />
        <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
          <Skeleton className="w-5 h-5 rounded-full" />
        </div>
      </div>
      <div className="p-4">
        <Skeleton className="w-3/4 h-6 rounded-full mb-2" />
        <div className="flex items-center text-sm text-gray-600">
          <Skeleton className="w-5 h-5 rounded-full" />
          <Skeleton className="ml-1 w-8 h-4 rounded-full" />
          <Skeleton className="ml-2 w-16 h-4 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonShopCard;
