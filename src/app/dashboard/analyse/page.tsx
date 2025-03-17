// src/app/dashboard/analyse/page.tsx
//font
import { inter, poppins } from "@/style/font";
//icons
import { MdHistory } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsLayoutSplit } from "react-icons/bs";
import MiniSearchBar from "@/components/ui/input/MiniSearchBar";
import KpiCard from "@/components/ui/Card/KpiCard";

export default function analyse() {
  const kpiData = [
    {
      title: 'En Attente',
      value: 7265,
      pourcentage: 11.01,
      statut: 'en attente'
    },
    {
      title: 'Accepté',
      value: 3671,
      pourcentage: -0.03,
      statut: 'accepté'
    },
    {
      title: 'Refusé',
      value: 156,
      pourcentage: 15.03,
      statut: 'refusé'
    }
  ] as const;

  return (
    <>
      <div className="analyse-conainter min-h-[320vh] bg-white p-2 w-full">
        <div className="icones bar text-black flex flex-row w-full justify-between">
          <div className={`start-icon font-medium w-[30%] ${inter.className} `}>
            <span className="text-gray-300">Dashboard   /</span>
            <span> Analyse</span>
          </div>
          <div className="searchbar">
            <MiniSearchBar/>
          </div>
          <div className="end-icon flex flex-row  items-center gap-x-2 p-1 text-base justify-end  w-[30%]">
            <MdHistory />
            <IoIosNotificationsOutline />
            <BsLayoutSplit/>
          </div>
        </div>
        <div className={`vueGlobal flex w-full text-black ${inter.className}  font-medium items-center justify-start `}>
          <h3>Vue d'ensemble</h3>
        </div>
        <div className="bubleStatistique w-full">
        <div className="grid gap-6 md:grid-cols-3">
        {kpiData.map((kpi) => (
          <KpiCard
            key={kpi.title}
            title={kpi.title}
            value={kpi.value}
            statut={kpi.statut}
            pourcentage={kpi.pourcentage}
          />
        ))}
      </div>
        </div>
      </div>
    </>
  );
}