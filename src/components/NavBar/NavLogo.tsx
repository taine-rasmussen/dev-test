import React from 'react';

const Logo: React.FC = () => (
  <div className='bg-dark-green h-16 w-16 rounded-full flex items-center justify-center'>
    <div className='bg-white h-12 w-10 rounded-[50%/60%_60%_40%_40%] flex items-center justify-center'>
      <div className='h-5 w-5 bg-gradient-to-br from-yellow-600 to-red-500 rounded-full flex items-center justify-center mt-5'>
        <div className='h-[5px] w-[8px] bg-white rounded-[50%] rotate-45 ml-1.5 mb-1.5'></div>
      </div>
    </div>
  </div>
);

const NavLogo: React.FC = () => {
  return (
    <div className='flex flex-row items-center'>
      <Logo />
      <div className='flex flex-col items-center w-28'>
        <p className='font-bold text-2xl tracking-widest'>ZECCO</p>
        <p className='font-medium'>Organic farm</p>
      </div>
    </div>
  );
};

export default NavLogo;
