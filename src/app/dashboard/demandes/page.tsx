'use client'
import React, { useState } from "react";
import SearchBar from "@/components/ui/input/SearchBar";

// icon
import { GiSettingsKnobs } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { poppins } from "@/style/font";
import { TbAlignJustified } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";
//Composant
import SegmentedControl from "@/components/ui/button/ButtonSegmented";

// src/app/dashboard/demande/page.tsx
export default function demande() {
    const [viewMode, setViewMode] = useState('grid');

    const handleViewChange = (value: string) => {
        setViewMode(value);
        console.log('View changed to:', value);
    };
    return (
        <>
            <div className="searchbar flex justify-end  gap-x-10 items-center">
                <SearchBar />
                <GiSettingsKnobs className="rotate-90 bg-green-600 p-2 size-9 font-bold rounded-xl" />
                <FaRegUser className="rounded-xl size-6  text-black" />
            </div>
            <div className="entete flex flex-row justify-between items-center w-full  mt-4">
                <h1 className={`${poppins.className} text-xl  text-black`}>Les demandes de sponsoring</h1>
                <SegmentedControl
                    options={[
                        { value: 'grid', icon: <IoGrid size={16} /> },
                        { value: 'list', icon: <TbAlignJustified size={16} /> },
                    ]}
                    defaultValue="grid"
                    onChange={handleViewChange}
                />
                <button type="button" className="flex items-center justify-center gap-x-2  px-4 py-2 rounded bg-radial  to-[#00300C] from-[#019626] hover:from-[#76ff98] hover:to-[#02ff41] hover:text-black transition-all duration-500 ease-in-out transform">
                    <FaPlus />
                    <span className={`${poppins.className} font-bold `}>Nouvel appel a sponsors </span>
                </button>
            </div>
        
        </>
    );
}