import React from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-white w-[100%]">
      <div className="container flex justify-between items-center">
        <div className="text-2xl font-bold">Urban Nest</div>

        <ul className="flex space-x-6">
          <li className="cursor-pointer">Furniture</li>
          <li className="cursor-pointer">Outdoor</li>
          <li className="cursor-pointer">Lightning</li>
          <li className="cursor-pointer">Dinning</li>
          <li className="cursor-pointer">Bathrooms</li>
          <li className="cursor-pointer">Mirrors & Decors</li>
        </ul>

        <div className="flex" style={{ gap: "42px" }}>
          <FaSearch className="text-[gray] size-[600] cursor-pointer" />
          <FaHeart className="text-[gray] size-[600] cursor-pointer" />
          <FaShoppingCart className="text-[gray] size-[600] cursor-pointer" />
          <FaUser className="text-[gray] size-[600] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
