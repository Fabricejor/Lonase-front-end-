import React from 'react'

interface pricebadgeProps{
  amount:number;
}

export default function PriceBadge({ amount }: pricebadgeProps) {
  return (
    <div className="bg-black text-white px-8 py-3 rounded-tl-2xl rounded-bl-2xl rounded-br-full inline-block">
      <p className="text-sm text-start">Montant demandé</p>
      <p className="text-lg font-bold text-start">{amount} FCFA</p>
    </div>
  )
}
