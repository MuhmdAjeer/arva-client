import React from "react";
import { Skeleton } from "../ui/skeleton";

const SkeletonFoodCard = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 flex items-center">
        <Skeleton className="w-24 h-24 object-cover rounded-lg" />
        <div className="ml-4 flex-grow">
          <Skeleton className="w-3/4 h-6 rounded-full mb-2" />
          <Skeleton className="w-full h-4 rounded-full mb-2" />
          <Skeleton className="w-1/4 h-4 rounded-full" />
        </div>
        <div className="ml-4">
          <Skeleton className="w-10 h-10 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonFoodCard;
