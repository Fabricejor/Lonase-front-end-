import React, { useState } from 'react';
// import { Grid2x2, AlignJustify } from 'lucide-react';

type Option = {
    value: string;
    icon: React.ReactNode;
    label?: string;
};

interface SegmentedControlProps {
    options: Option[];
    defaultValue?: string;
    onChange?: (value: string) => void;
    className?: string;
}

const SegmentedControl = ({
    options,
    defaultValue,
    onChange,
    className,
}: SegmentedControlProps) => {
    const [activeValue, setActiveValue] = useState(defaultValue || options[0]?.value);

    const handleClick = (value: string) => {
        setActiveValue(value);
        onChange?.(value);
    };

    return (
        <div
            className={`relative flex items-center p-0.5 rounded-full bg-gray-200 w-fit transition-all duration-300 ${className || ''}`}
        >
            {options.map((option) => {
                const isActive = option.value === activeValue;
                return (
                    <button
                        key={option.value}
                        onClick={() => handleClick(option.value)}
                        className={`relative z-10 px-3 py-1.5 rounded-full transition-all duration-200 flex items-center justify-center text-xs font-medium min-w-[50px] ${isActive ? 'text-white' : 'text-gray-600 hover:text-gray-800'
                            }`}
                    >
                        <span className="flex items-center justify-center">
                            {option.icon}
                            {option.label && <span className="ml-1">{option.label}</span>}
                        </span>
                        {isActive && (
                            <span
                                className="absolute inset-0 bg-green-500 rounded-full -z-10"
                                style={{
                                    transition: "all 0.2s ease"
                                }}
                            />
                        )}
                    </button>
                );
            })}
        </div>
    );
};

export default SegmentedControl;
