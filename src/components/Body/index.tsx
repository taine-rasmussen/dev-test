import veg from '../../assets/veg.png';
import Button from '../Library/Button';
import { motion } from 'framer-motion'

const Body: React.FC = () => {
  return (
    <div className='h-full w-full flex items-center px-14 py-6'>
      <div className='w-[35%]'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -400}
          }}
        >
          <img
            src={veg}
            alt='veg'
            className='h-[650px] w-[850px]'
          />
        </motion.div>
      </div>
      <div className='w-[65%] flex items-center justify-center h-full'>
        <div className='flex items-start flex-col gap-[32px] w-1/4'>
          <p className='font-extralight text-[38px] whitespace-nowrap leading-tight -mb-[15px]'>
            We make it easy<br />for you to cook<br /> delicious dinners
          </p>
          <p className='font-extralight text-[16px] whitespace-nowrap'>
            Simply choose your recipes from a weekly menu and <br />
            we'll deliver freshly picked vegetables, pre-portioned <br />
            ingredients, and step-by-step recipes directly to your door <br />
            ready for you to cook
          </p>
          <Button primary={true}>
            SHOP NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Body;
