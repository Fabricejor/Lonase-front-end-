'use client'
import DetailCard from '@/components/ui/Card/DetailCard'
import Card from '@/components/ui/Card/ProductCard'
import TableComponent from '@/components/ui/tab/Tab'
import React from 'react'

export default function page() {
    return (
        <div className='test-composant h-screen w-full bg-white'>
            <h1 className='text-black text-xl'>list card</h1>
            <DetailCard/>
            <h1 className='text-black text-xl'>img card </h1>
            <Card/>
            <h1 className='text-black text-xl'>tableau </h1>
            <TableComponent/>
        </div>
    )
}
