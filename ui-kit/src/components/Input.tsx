import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    roundedSide?: 'left' | 'right' | 'both';
}

const Input = ({ className, roundedSide, ...props }: InputProps) => {
    const roundedSideClass = roundedSide === 'left' ? 'rounded-l' : className === 'right' ? 'rounded-r' : 'rounded';

    return (
        <input
            className={`border border-zinc-300 focus:outline-blue-500 ${className} ${roundedSideClass}`}
            {...props}
        />
    );
};

export default Input;
