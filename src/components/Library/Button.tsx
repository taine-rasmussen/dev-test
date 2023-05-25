import React from 'react';
import { Button as MaterialButton } from "@material-tailwind/react";

interface ButtonProps {
  children: string;
  primary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, primary = false }) => {
  
  const primaryStyling: string = 'text-[14px] font-base bg-green whitespace-nowrap px-[23px] py-[20.5px]';
  const secondaryStyling: string = 'border-solid border-black border-2 text-[12px] px-[18px] py-[11px] whitespace-nowrap font-light';

  return (
    <MaterialButton 
      className={primary ? primaryStyling : secondaryStyling} 
      ripple={true}
    >
      {children}
    </MaterialButton>
  );
};

export default Button;
