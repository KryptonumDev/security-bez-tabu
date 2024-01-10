'use client'
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Heading = ({ children }) => {
  const wrapper = useRef(null);
  const isInView = useInView(wrapper, { once: true, margin: "0px 0px -33% 0px" });

  return (
    <motion.header
      ref={wrapper}
      initial={{ opacity: 0 }}
      animate={{
        opacity: isInView ? 1 : 0,
      }}
      exit={{ opacity: 0 }}
      transition={{
        duration: .2,
      }}
    >{children}</motion.header>
  );
};

export default Heading;