import React from 'react';
import NavLogo from './NavLogo';
import NavMenu from './NavMenu';
import NavCTA from './NavCTA';

const NavBar: React.FC = () => {
  return (
    <div className='flex flex-row items-center h-[90px] w-full'>
      <div className='flex justify-center w-[35%]'>
        <NavLogo />
      </div>
      <div className='w-[65%] flex flex-row justify-between pr-44'>
        <NavMenu />
        <NavCTA />
      </div>
    </div>
  );
};

export default NavBar;
