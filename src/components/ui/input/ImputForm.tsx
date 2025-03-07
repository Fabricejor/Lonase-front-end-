
import React, { useState } from 'react'
// import TitleForm from '../TitleForm'
import { roboto } from '@/style/font'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}
export default function ImputForm({ label, ...props }: InputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    return (
        <div className="relative w-full">
            {/* Label flottant */}
            <label
                className={` ${roboto.className} absolute left-3 transition-all ${isFocused || hasValue ? "top-1 text-xs text-gray-500" : "top-3 text-base text-gray-500"
                    }`}
            >
                {label}
            </label>

            {/* Champ de saisie */}
            <input
                className={`${roboto.className} w-full border border-gray-300 rounded-md p-4 pt-6 text-green-600 focus:outline-none focus:ring-1 focus:border-transparent shadow-[-4px_0px_0px_#009951]`}
                onFocus={() => setIsFocused(false)}
                onBlur={(e) => {
                    setIsFocused(false);
                    setHasValue(e.target.value.length > 0);
                }}
                {...props}
            />
        </div>
    );
}
