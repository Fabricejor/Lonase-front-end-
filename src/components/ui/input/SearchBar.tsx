'use client'
import React from "react"
import { FaSearch } from "react-icons/fa";




const SearchBar = () => {
    return (
      <div className={`flex items-center gap-2 w-[70%] px-5 py-3 bg-gray-100 rounded-2xl `}>
        <FaSearch className="text-gray-500" size={20} />
        <input
          type="text"
          placeholder={"Recherche un appel à sponsors"}
          className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder:text-gray-400 text-sm"

        />
      </div>
    );
  };
  
  export default SearchBar;