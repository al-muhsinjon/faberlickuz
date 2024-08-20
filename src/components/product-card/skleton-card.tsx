import React from "react";

const SkeletonCard: React.FC = () => {
  return (
    <div className="border p-3 rounded-lg h-full flex flex-col justify-between bg-white shadow-md">
      <div className="relative w-full h-[220px] md:h-[270px] lg:h-[300px] rounded-lg bg-gray-200 animate-pulse" />
      <div className="mt-4 mb-2 h-6 bg-gray-200 rounded animate-pulse" />
      <div className="lg:flex flex-wrap gap-3 mb-4">
        <div className="w-1/2 h-4 bg-gray-200 rounded animate-pulse" />
        <div className="w-1/2 h-4 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="flex gap-2">
        <div className="w-full h-8 bg-gray-200 rounded animate-pulse" />
        <div className="w-full h-8 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  );
};

export default SkeletonCard;
