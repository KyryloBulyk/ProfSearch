import React from 'react';
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    roundedSide?: 'left' | 'right' | 'both';
}
declare const Button: ({ children, className, type, roundedSide, disabled, ...props }: ButtonProps) => React.JSX.Element;
export default Button;
