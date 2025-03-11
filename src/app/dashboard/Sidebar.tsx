// src/app/dashboard/sidebar.tsx
import Link from 'next/link';
import React, { useState } from 'react';

// icons
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function Sidebar() {
    const [open, setOpen] = useState(true);// hooks pour connaitre letat du button qui va reduire le sidebar
    const Menu = [
        { titre: "Demandes", icons: "", alert: "" },
        { titre: "notifications", icons: "", alert: "" },
        { titre: "statistiques", icons: "", alert: "" },
        { titre: "Gestion users", icons: "", alert: "" },
        { titre: "Validation", icons: "", alert: "" },
        { titre: "aide", icons: "", alert: "" },
        { titre: "parametres", icons: "", alert: "" },
        { titre: "déconnexion", icons: "", alert: "" }



    ]
    return (

        <div className={`sidebar flex flex-col  ${open ? "w-64" : "w-20"} bg-[#009951] text-white p-3 duration-700 ease-out  relative`}>
            <IoIosArrowDroprightCircle
                className={`bg-[#009951] text-purple-dark text-3xl 
                                        rounded-full absolute 
                                        -right-5 top-10 
                                        border  cursor-pointer
                                        duration-700 ease-in-out
                                        ${open && "rotate-180"}`}
                onClick={() => setOpen(!open)}
            />
            <div className={`flex flex-col self-center items-center justify-center bg-white  rounded
                             ${open ? "max-xl:w-[80%]   max-xl:h-[15%]" : "max-xl:h-[10%] p-1"}`}>
                <img src="/images/logo-lonase.png" alt="logo" className={`${open ? "w-[50%] h-auto" : "w-[100%]"}  block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`} />
            </div>
            <div className='profil-info-user flex flex-row items-center justify-evenly w-full mt-4 duration-700 ease-in-out'>
                <div className={`img-profil ${open ? "w-[25%]" : "w-[100%] p-2"} rounded  ` }>
                    <img src="/images/default-profil.jpg" alt="profil img" className='rounded' />
                </div>
                <div className={`user-info flex flex-col  ${!open && "hidden"} `}>
                    <h2 className='font-bold  text-[28px'>admin@gmail.com</h2>
                    <p className='font-light text-[11px]'>Responsable marketing</p>
                </div>
            </div>
            <ul>
                {/* <li className="mb-2">
                    <Link href="/dashboard/overview" className="block p-2 hover:bg-gray-700 rounded">
                        Overview
                    </Link>
                </li>
                <li className="mb-2">
                    <Link href="/dashboard/analytics" className="block p-2 hover:bg-gray-700 rounded">
                        Analytics
                    </Link>
                </li>
                <li className="mb-2">
                    <Link href="/dashboard/settings" className="block p-2 hover:bg-gray-700 rounded">
                        Settings
                    </Link>
                </li> */}
            </ul>
        </div>
    );
}