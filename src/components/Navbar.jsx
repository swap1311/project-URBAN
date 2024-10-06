import React from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-[white] max-w-[1340px] flex justify-between flex-wrap">
      
        <div className="bg-[white] text-[32px] font-[700] font-[Poppins]">Urban Nest</div>

        <div className=" bg-[white] flex-wrap flex space-x-6 font-[300] text-[18px] font-[Poppins]">
          <span className="cursor-pointer">Furniture</span>
          <span className="cursor-pointer">Outdoor</span>
          <span className="cursor-pointer">Lightning</span>
          <span className="cursor-pointer">Dinning</span>
          <span className="cursor-pointer">Bathrooms</span>
          <span className="cursor-pointer">Mirrors & Decors</span>
        </div>

        <div className="flex h-[24px]" style={{ gap: "42px" }}>
          <FaSearch className="text-[gray] size-[600] cursor-pointer" />
          <FaHeart className="text-[gray] size-[600] cursor-pointer" />
          <FaShoppingCart className="text-[gray] size-[600] cursor-pointer" />
          <FaUser className="text-[gray] size-[600] cursor-pointer" />
        </div>
      </div>
  );
};

export default Navbar;
