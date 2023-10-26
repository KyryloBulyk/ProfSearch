import React from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    required?: boolean;
    roundedSide?: 'left' | 'right' | 'both';
}
declare const Input: ({ className, roundedSide, ...props }: InputProps) => React.JSX.Element;
export default Input;
