import Button from '../Library/Button';
import herodish from '../../assets/herodish.png';

const Hero = () => {
  return (
    <div className="w-full h-[90%] flex items-center justify-center ">
      <div className="w-[35%] flex justify-center h-full z-40 ">
        <div className="flex items-start flex-col gap-[16px] w-1/3 -ml-[33px]">
          <p className="font-bold text-[50px] whitespace-nowrap overflow-x-visible -mb-[15px]">
            You deserve better
          </p>
          <p className="font-extralight text-[40px] whitespace-nowrap overflow-wrap-normal">
            Consider this a<br />
            taste intervention.
          </p>
          <Button primary={true}>LEARN MORE</Button>
        </div>
      </div>
      <div className="w-[65%] bg-light-green">
        <img src={herodish} alt="dish" className="ml-[5%]" />
      </div>
    </div>
  );
};

export default Hero;
