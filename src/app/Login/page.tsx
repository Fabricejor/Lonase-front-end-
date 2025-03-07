'use client'
import React from 'react'
import Title from "@/components/ui/TitleBanner";
import TitleForm from '@/components/ui/TitleForm';
import SubTitleForm from '@/components/ui/SubTitleForm';
import ImputForm from '@/components/ui/input/ImputForm';
// import ButtonForm from '@/components/ui/button/ButtonForm';

export default function page() {

    return (
        <>
            <div className='flex flex-row  justify-between w-full min-h-screen bg-white'>
                <div className='credantial w-[56%] p-8 max-xl:p-4 '>
                    <div className='logo-banner flex flex-row items-center justify-between w-full '>
                        <img src="/images/logo-lonase.png" className='h-auto w-[25%]' alt="lonase-logo" />
                        <img src="/images/LOGO_UJUZAI_HD.png" className='h-auto w-[25%]' alt="ujuzai-logo" />
                    </div>
                    <div className='title-label-from mt-20 max-xl:mt-14 grid  w-full justify-start gap-y-4'>
                        <TitleForm text='CONNEXION' />
                        <SubTitleForm text='Bienvenu sur votre page de connexion' />
                    </div>
                    <div className='form-connexion w-[85%] flex flex-col'>
                        <form action="" className='grid gap-y-7'>
                            <ImputForm label='Email' type='email' placeholder='Gtp@ia.com' />
                            <ImputForm label='mot de passe' type='password' placeholder='password' />
                            <div className='button-form-connexion space-x-4 p-10'>
                                <button className='px-6 py-2 rounded-md font-semibold transition-all duration-200 bg-green-600 text-white shadow-md hover:bg-green-700' type='button'> connexion</button>
                                <button className='px-6 py-2 rounded-md font-semibold transition-all duration-200 border border-green-600 text-green-600 hover:bg-green-50' type='button'> s'inscrire</button>
                            </div>
                        </form>
                    </div>
                    <div className='connexion-title'>

                    </div>
                </div>
                <div className='banner flex flex-col w-[44%] min-h-screen relative bg-gradient-to-b from-[#05D355] to-[#026D2C]'>
                    <div className='flex justify-center w-full self-center mt-[8%]'>
                        <Title text="Ensemble, donnons vie aux talents et aux grandes ambitions !" />
                    </div>

                    <div className='image-container absolute self-end bottom-0 w-[532px] h-[785px]'>
                        <img src="/images/login-avatar.png" alt="login avatar" className='w-full h-auto' />

                    </div>
                    <div className='filter-overlay absolute inset-0 bg-black opacity-50'></div>
                </div>
            </div>
        </>
    )
}
