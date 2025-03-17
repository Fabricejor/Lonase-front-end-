'use client'

import React, { useState } from 'react'
import { inter } from '@/style/font';

interface KpiCardProps {
    title: string;
    value: number;
    pourcentage: number;
    statut: 'en attente' | 'accepté' | 'refusé';
}

export default function KpiCard({ title, value, pourcentage, statut }: KpiCardProps) {
    // / Mapping des variantes directement avec les classes Tailwind
    const cardBackground = {
        'en attente': 'bg-yellow-100',
        'accepté': 'bg-emerald-100',
        'refusé': 'bg-red-100'
    }[statut];

    const valueColor = {
        'en attente': 'text-yellow-900',
        'accepté': 'text-emerald-900',
        'refusé': 'text-red-900'
    }[statut as 'en attente' | 'accepté' | 'refusé'];

    return (
        <div className={`relative overflow-hidden rounded-lg border shadow-sm transition-all duration-300 hover:shadow-lg ${cardBackground} group cursor-pointer`}>
            <div className={`p-6 space-y-2 ${inter.className}`} >
                <div className="flex w-full justify-between">
                <h3 className="text-sm font-medium text-gray-600">{title}</h3>
                <span className="text-sm text-green-600 font-medium">
                            {pourcentage}%
                        </span>
                        </div>
                <div className="flex items-end justify-center">
                    <div className="space-y-1">
                        <p className={`text-3xl font-bold tracking-tight ${valueColor}`}>
                            {new Intl.NumberFormat('fr-FR').format(value)}
                        </p>
                    </div>

                    <div className={`absolute bottom-0 right-0 w-24 h-24 -m-6 transition-transform duration-300 rounded-full opacity-10 ${cardBackground} group-hover:scale-150`} />
                </div>
            </div>
        </div>
    )
}
