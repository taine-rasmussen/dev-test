import React from 'react';
import Button from '../Library/Button';
import herodish from '../../assets/herodish.png';

const Hero: React.FC = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="w-[35%] flex justify-center h-full z-40 ">
        <div className="flex items-start flex-col gap-[16px] w-1/3 -ml-[33px]">
          <p className="font-bold text-[50px] whitespace-nowrap overflow-x-visible -mb-[15px]">
            You deserve better
          </p>
          <p className="font-extralight text-[40px] whitespace-nowrap overflow-wrap-normal">
            Consider this a<br />
            taste intervention.
          </p>
          <Button primary>LEARN MORE</Button>
        </div>
      </div>
      <div className="w-[65%] bg-light-green">
        <img src={herodish} alt="dish" />
      </div>
    </div>
  );
};

export default Hero;
