import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white  w-full">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">Urban Nest</div>

        <div className="flex space-x-6">
          <div className="mr-auto">Furniture</div>
          <div>Outdoor</div>
          <div>Lighting</div>
          <div>Dining</div>
          <div>Bathrooms</div>
          <div>Mirrors & Decors</div>
        </div>

        <div className="flex space-x-10">
          <img src="file:///C:/Users/91630/Downloads/01%20align%20center%20(1).svg" alt="Search" className="w-[24px] h-[24px]" />
          <img src="https://via.placeholder.com/24" alt="Heart" className="w-[24px] h-[24px]" />
          <img src="https://via.placeholder.com/24" alt="Shopping Cart" className="w-[24px] h-[24px]" />
          <img src="https://via.placeholder.com/24" alt="User" className="w-[24px] h-[24px]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
