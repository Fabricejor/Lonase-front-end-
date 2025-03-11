import React from 'react'
import { roboto } from '@/style/font'

export default function SubTitleForm({ text }: { text: string }) {
    return (
        <h4 className={`${roboto.className} text-gray-500 text-xl max-xl:text-base`}>
            {text}
        </h4>
    )
}
