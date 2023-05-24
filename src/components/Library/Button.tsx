import React from 'react';

interface ButtonProps {
  children: string;
  primary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, primary = false }) => {
  
  const primaryStyling: string = 'text-[14px] font-base bg-green whitespace-nowrap px-[23px] py-[20.5px]';
  const secondaryStyling: string = 'border-solid border-black border-2 text-xs p-2 whitespace-nowrap font-light';

  return (
    <button className={primary ? primaryStyling : secondaryStyling}>
      {children}
    </button>
  );
};

export default Button;
