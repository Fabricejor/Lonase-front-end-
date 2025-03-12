// src/app/dashboard/overview/page.tsx
//font
import { poppins } from "@/style/font";
//icons
import { MdHistory } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsLayoutSplit } from "react-icons/bs";
import MiniSearchBar from "@/components/ui/input/MiniSearchBar";

export default function analyse() {
  return (
    <>
      <div className="icones bar text-black flex flex-row w-full justify-between">
        <div className={`start-icon ${poppins.className} `}>
          <span>Dashboard   /</span>
          <span> Analyse</span>
        </div>
        <div className="searchbar">
          <MiniSearchBar/>
        </div>
        <div  className="end-icon flex flex-row">
          <MdHistory />
          <IoIosNotificationsOutline />
          <BsLayoutSplit />
        </div>
      </div>
    </>
  );
}