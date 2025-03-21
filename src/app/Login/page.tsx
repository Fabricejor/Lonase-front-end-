'use client'
import Link from 'next/link';
import React from 'react'
import Title from "@/components/ui/TitleBanner";
import TitleForm from '@/components/ui/TitleForm';
import SubTitleForm from '@/components/ui/SubTitleForm';
import ImputForm from '@/components/ui/input/ImputForm';
import { FcGoogle } from "react-icons/fc";
// import ButtonForm from '@/components/ui/button/ButtonForm';

export default function page() {

    return (
        <>
            <div className='flex flex-row  justify-between w-full min-h-screen bg-white'>
                <div className='credantial w-[56%] px-8 max-xl:px-4 '>
                    <div className='logo-banner flex flex-row items-center justify-between  w-full '>
                        <Link href="/" className='h-auto w-[25%]  max-xl:w-[20%] cursor-pointer'>
                            <img src="/images/logo-lonase.png" alt="lonase-logo" />
                        </Link>
                        <img src="/images/LOGO_UJUZAI_HD.png" className='h-auto w-[30%]  max-xl:w-[25%] ' alt="ujuzai-logo" />
                    </div>
                    <div className='title-label-from mt-20 mb-10 max-xl:mb-4 max-xl:mt-10 grid  w-full justify-start gap-y-4 max-xl:gap-y-1'>
                        <TitleForm text='CONNEXION' />
                        <SubTitleForm text='Bienvenu sur votre page de connexion' />
                    </div>
                    <div className='form-connexion w-[85%] flex flex-col'>
                        <form action="" className='grid gap-y-4'>
                            <ImputForm label='Email' type='email' placeholder='Gtp@ia.com' />
                            <ImputForm label='mot de passe' type='password' placeholder='password' />
                            <div className='forget_password flex justify-end w-full '>
                                <button type='button' className='text-green-600 text-xl max-xl:text-base'>mot de passe oublié</button>
                            </div>
                            <div className='button-form-connexion flex flex-row space-x-4 p-x-10 mt-4 max-xl:mt-1'>
                                <button className='text-3xl max-xl:text-base px-6 py-2 rounded-md font-semibold transition-all duration-200 bg-green-600 text-white shadow-md hover:bg-green-700' type='button'> connexion</button>
                                <button className='text-3xl max-xl:text-base px-6 py-2 rounded-md font-semibold transition-all duration-200 border border-green-600 text-green-600 hover:bg-green-50' type='button'> s'inscrire</button>
                                <button className=' text-3xl max-xl:text-base flex flex-row justify-center items-center px-6 py-2 rounded-md font-semibold transition-all duration-200 border border-green-600 text-green-600 hover:bg-green-50' type='button'><FcGoogle  className='text-2xl'/><p>oogle</p></button>
                            </div>
                        </form>
                    </div>
                    
                </div>
                <div className='banner flex flex-col w-[44%] min-h-screen relative bg-gradient-to-b from-[#05D355] to-[#026D2C]'>
                    <div className='flex justify-center w-full self-center mt-[5%]'>
                        <Title text="Ensemble, donnons vie aux talents et aux grandes ambitions !" />
                    </div>

                    <div className='image-container absolute self-end bottom-0 w-[60%] h-auto'>
                        <img src="/images/login-avatar.png" alt="login avatar" className='w-full h-auto' />

                    </div>
                    <div className='filter-overlay absolute inset-0 bg-black opacity-50'></div>
                </div>
            </div>
        </>
    )
}
