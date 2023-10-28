import React from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    roundedSide?: 'left' | 'right' | 'both';
}
declare const Input: ({ className, roundedSide, ...props }: InputProps) => React.JSX.Element;
export default Input;
