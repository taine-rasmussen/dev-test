import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import right from '../../assets/right.png';
import React, { useEffect } from "react";
import left from '../../assets/left.png';
import main from '../../assets/main.png';

const AnimatedImage: React.FC = () => {
  const controlsLeft = useAnimation();
  const controlsMain = useAnimation();
  const controlsRight = useAnimation();

  const [refLeft, inViewLeft] = useInView();
  const [refMain, inViewMain] = useInView();
  const [refRight, inViewRight] = useInView();

  const imageVariantLeft = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -400 }
  };

  const imageVariantMain = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 400 }
  };

  const imageVariantRight = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 400 }
  };

  useEffect(() => {
    if (inViewLeft) {
      controlsLeft.start("visible");
    }
    if (inViewMain) {
      controlsMain.start("visible");
    }
    if (inViewRight) {
      controlsRight.start("visible");
    }
  }, [controlsLeft, controlsMain, controlsRight, inViewLeft, inViewMain, inViewRight]);

  return (
    <div className="relative">
      <motion.div
        ref={refLeft}
        initial="hidden"
        animate={controlsLeft}
        transition={{ duration: 0.7 }}
        variants={imageVariantLeft}
        className='absolute top-0 left-0'
      >
        <img src={left} alt="vegetables" className="z-10" />
      </motion.div>
      <motion.div
        ref={refMain}
        initial="hidden"
        animate={controlsMain}
        transition={{ duration: 0.7 }}
        variants={imageVariantMain}
        className='absolute top-0 left-0'
      >
        <img src={main} alt="vegetables" />
      </motion.div>
      <motion.div
        ref={refRight}
        initial="hidden"
        animate={controlsRight}
        transition={{ duration: 0.7 }}
        variants={imageVariantRight}
      >
        <img src={right} alt="vegetables" className='w-full h-auto'/>
      </motion.div>
    </div>
  );
};

export default AnimatedImage