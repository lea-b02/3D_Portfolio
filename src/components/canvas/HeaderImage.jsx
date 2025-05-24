import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import CanvasLoader from '../Loader'
import { motion } from "framer-motion";
import headerImg from '/header-img.svg';
import Loader1 from '../Loader1';


const HeaderImageCanvas = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader1 />}
      <motion.img
        src={headerImg}
        alt="Header Image"
        onLoad={() => setLoading(false)}
        className={`
          top-[47%] right-3 w-[300px]   
          sm:top-[57%] sm:right-5 sm:w-[260px]
          md:top-[40%] md:right-10 md:w-[390px]
          lg:top-[35%] lg:right-20 lg:w-[420px]
          absolute transform -translate-y-1/2
          ${loading ? 'hidden' : 'block'}
        `}
        animate={{ x: [0, -50, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
    </>
  );
};

export default HeaderImageCanvas;