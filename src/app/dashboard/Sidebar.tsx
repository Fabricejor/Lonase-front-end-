// src/app/dashboard/sidebar.tsx
import Link from 'next/link';
import React, { useState } from 'react';

//font
import { poppins } from '@/style/font';
// icons
import { IoIosArrowDroprightCircle, IoMdNotificationsOutline, IoMdStats } from "react-icons/io";
import { LuFileSpreadsheet, LuClipboardCheck, LuCircleHelp, LuSettings } from "react-icons/lu";
import { FaPowerOff } from "react-icons/fa6";
import { MdOutlineManageAccounts } from "react-icons/md";

export default function Sidebar() {
    const [open, setOpen] = useState(true);// hooks pour connaitre letat du button qui va reduire le sidebar
    const Menu = [
        { src:"/dashboard/demandes", titre: "Demandes", icons: <LuFileSpreadsheet />, alert: "" },
        { src:"/dashboard/analyse", titre: "notifications", icons: <IoMdNotificationsOutline />, alert: "" },
        { src:"/dashboard/", titre: "statistiques", icons: <IoMdStats />, alert: "" },
        { src:"/dashboard/", titre: "Gestion users", icons: <MdOutlineManageAccounts />, alert: "" },
        { src:"/dashboard/", titre: "Validation", icons: <LuClipboardCheck />, alert: "" },
        { src:"/dashboard/", titre: "aide", icons: <LuCircleHelp />, alert: "" },
        { src:"/dashboard/", titre: "parametres", icons: <LuSettings />, alert: "" },
        { src:"/dashboard/", titre: "déconnexion", icons: <FaPowerOff />, alert: "" }



    ]
    return (

        <div className={`sidebar h-screen flex flex-col justify-center   ${open ? "w-64 gap-y-5" : "w-20 items-center gap-y-10"} bg-[#009951] text-white p-3 duration-700 ease-out  relative`}>
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

            <ul className=''>
                {Menu.map((menu, index) => {
                    return (
                        <Link  key={index} href={menu.src} className={`text-white flex hover:bg-green-50  hover:text-black items-center gap-x-4 cursor-pointer p-2 rounded-md`}>
                            <span className='text-2xl block float-left '>{menu.icons} </span>
                            <p className={` ${poppins.className} text-center ${!open && "hidden"}`} >{menu.titre}</p>
                        </Link>

                    )
                })}
            </ul>
            <div className=' profil-info-user item  flex flex-row items-center justify-evenly w-full mt-4 duration-700 ease-in-out'>
                    <div className={`img-profil ${open ? "w-[25%]" : "w-[100%] p-2"} rounded  `}>
                        <img src="/images/default-profil.jpg" alt="profil img" className='rounded' />
                    </div>
                    <div className={`user-info flex flex-col  ${!open && "hidden"} `}>
                        <h2 className='font-bold  text-[28px'>admin@gmail.com</h2>
                        <p className='font-light text-[11px]'>Responsable marketing</p>
                    </div>
                </div>
        </div>
    );
}