import React from 'react';
import Button from '../Library/Button';

const NavCTA: React.FC = () => {
  return (
    <div className="flex gap-x-6">
      <h1 className="font-semibold p-3 whitespace-nowrap hover:text-orange hover:cursor-pointer text-[14px]">
        Log in
      </h1>
      <Button primary={false}>CREATE ACCOUNT</Button>
    </div>
  );
};

export default NavCTA;
