'use client'
import React from 'react'
import Title from "@/components/Title";

export default function page() {

    return (
        <>
            <div className='flex flex-row  justify-between w-full h-screen bg-white'>
                <div className='credantial w-[50%]'>
                    <p>test</p>
                </div>
                <div className='banner flex flex-col w-[40%] h-screen relative  bg-gradient-to-b from-[#05D355] to-[#026D2C]  '>
                    <div className='flex justify-center w-full self-center mt-10'>
                        {/* <h1 className='special-text'>Ensemble, donnons vie aux talents et aux grandes ambitions !</h1> */}
                        <Title text="Ensemble, donnons vie aux talents et aux grandes ambitions !"/>
                    </div>

                    <div className='image-container absolute self-end bottom-0  bg-red-400 w-[532px] h-[785px]'>
                        <img src="/images/login-avatar.png" alt="login avatar" className='w-full h-auto' />
                    </div>
                </div>
            </div>
        </>
    )
}
