import React from 'react'
import { poppins } from '@/style/font'
// icons
import { MdRemoveRedEye } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { FaCheckCircle } from "react-icons/fa";
//components
import GaugeChart from '../graph/GaugeChart';
import PriceBadge from '../badge/PriceBadge';

export default function DetailCard() {
  return (
    <div className={`list-container flex flex-row w-full h-44 items-center justify-between ${poppins.className} border-b py-1 border-gray-300  gap-x-8`}>
        <div className='start-list flex flex-row items-center justify-between h-full py-0.5 '>
            <div className='img-list-card w-40  h-auto'>
                <img  src="https://s3-alpha-sig.figma.com/img/75e4/4517/8c7e2e4b68a9e20100fa6ac10680a9d7?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CHubGS~4g5DS6jXJ3yp5RKmCusVJR7MymJwCK74YuM4FLjVYcHL0k6rPonD12QKzAks0Fy9n9MrW-CMAiTcNEPtUKJfMY4X-btf3W6XCGh95PMqEKw-5SraE7k5GGtpAAjPVyWQbNDGKsu4mnWSBQnqAdE-4r5cj1ZaetP7~CmENNr5opmmLIhKv~WhXiDD3dExs38iNCgjheG6VtwoStWEGVkXfndTmHsrWp2mMoeJhM1SoKHPfakm~Gke9szXrU6oUlWhlU0WJGsr7Ugr4adXwuksaz0yOmy5KWq9OxE~4CgIzDPmH9MiRybBvQ6ki5fFF3fh1cQlbLYlo9qFX7A__" alt="card-image" />
            </div>
            <div className='details-list flex flex-col h-fit  w-40 gap-y-4 items-center border-x border-gray-300  justify-center p-3'>
                <div className='details-badge text-center items-center flex flex-row'>
                    <span className='text-xs  px-3 py-0.5 text-white bg-black rounded ' >culture</span>
                    <span className='text-xs px-3 py-0.5 text-white bg-[#0000009C] rounded '>sport</span>
                </div>
                <div className=' info-detail flex flex-col text-sm gap-y-1 text-black'> 
                    <p className='font-extralight'>type d'organisation:</p>
                    <strong className='font-semibold'>Association</strong>
                    <p className='font-extralight'>Localisation:</p>
                    <strong>Dakar</strong>
                </div>
            </div>
            <div className="remuse-details w-[20%] h-fit flex-col     ">
                <p className={`font-light text-wrap text-justify text-sm`}>
                Le Festival de la Culture organise un événement exceptionnel mettant en avant la diversité 
                et la richesse des traditions à travers des spectacles artistiques, des expositions, des ateliers
                interactifs et des dégustations culinaires...
                </p>
                <button type='button' className='text-white bg-[#009951] text-sm font-semibold flex flex-row items-center justify-center w-full px-6 py-2 rounded'>
                    <MdRemoveRedEye  className='mr-3 text-xl'/>
                    <span>
                        voir plus
                    </span>
                </button>
            </div>
            <div className='graph py-4 h-full   w-[20%] flex items-center justify-center border-x border-gray-300 '>
                <GaugeChart  value={80}/>
            </div>
            <div className="option flex flex-col w-[20%] h-full items-center justify-center border-x border-gray-300 ">
                <div className='option-list flex flex-row items-center justify-center mt-[10%]'>
                    <FaCheckCircle  className='text-green-400 text-5xl'/>
                    <TiDelete  className='text-red-500 text-6xl'/>
                </div>
                <div className='badge-montant h-full flex items-center justify-center '>
                    <PriceBadge amount={3000}/>
                </div>
            </div>
        </div>
    </div>
  )
}
