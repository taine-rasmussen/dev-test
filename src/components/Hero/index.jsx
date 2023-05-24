import Button from '../Library/Button';
import herodish from '../../assets/herodish.png';

const Hero = () => {
  return (
    <div className='w-full h-full flex items-center justify-center '>
      <div className='w-[35%] flex justify-center h-full z-40 border-solid border-2 border-orange'>
        <div className='flex items-start flex-col gap-[32px] w-1/3'>
          <p className='font-bold text-7xl whitespace-nowrap overflow-x-visible'>
            You deserve better
          </p>
          <p className='font-extralight text-6xl whitespace-nowrap overflow-wrap-normal'>
            Consider this a<br />taste intervention.
          </p>
          <Button primary={true}>
            LEARN MORE
        </Button>
        </div>
      </div>
      <div className='w-[65%] bg-light-green'>
        <img src={herodish} alt='dish' />
      </div>
    </div>
  );
};

export default Hero;
