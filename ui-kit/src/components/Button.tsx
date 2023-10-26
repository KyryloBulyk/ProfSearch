import React from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    roundedSide?: 'left' | 'right' | 'both';
}
const Button = ({ children, className, type = 'button', roundedSide = 'both', disabled, ...props }: ButtonProps) => {
    const roundedSideClass = roundedSide === 'left' ? 'rounded-l' : roundedSide === 'right' ? 'rounded-r' : 'rounded';

    return (
        <button
            className={`bg-blue-500 text-sm text-white md:text-base ${className} ${roundedSideClass}`}
            type={type}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
