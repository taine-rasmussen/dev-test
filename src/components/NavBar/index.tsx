import React from 'react';
import NavLogo from './NavLogo';
import NavMenu from './NavMenu';
import NavCTA from './NavCTA';

const NavBar: React.FC = () => {
  return (
    <div className='flex flex-row items-center py-[20px] w-full'>
      <div className='flex justify-center w-[35%]'>
        <NavLogo />
      </div>
      <div className='w-[65%] flex flex-row  gap-20'>
        <NavMenu />
        <NavCTA />
      </div>
    </div>
  );
};

export default NavBar;
