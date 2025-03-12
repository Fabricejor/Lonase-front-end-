'use client'
import React from "react"
import { FaSearch } from "react-icons/fa";




const MiniSearchBar = () => {
    return (
      <div className={`flex items-center  gap-0 w-[100%] px-4 py-1 bg-gray-100 rounded-2xl `}>
        <FaSearch className="text-gray-500" size={15} />
        <input
          type="text"
          placeholder={"search"}
          className="ml-4 bg-transparent border-none outline-none text-gray-900 placeholder:text-gray-400 text-sm"

        />
      </div>
    );
  };
  
  export default MiniSearchBar;