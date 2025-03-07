import React from 'react'
import { open_sans } from '@/style/font'

export default function TitleForm({ text }: { text: string }) {
  return (
    <h1 className={`${open_sans.className} text-[#009951] text-4xl font-bold`}>
      {text}
    </h1>
  )
}
