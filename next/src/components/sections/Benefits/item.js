'use client'
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Item = ({ children, index }) => {
  const wrapper = useRef(null);
  const isInView = useInView(wrapper, { once: true, margin: "0px 0px -33% 0px" });

  return (
    <motion.li
      ref={wrapper}
      initial={{ opacity: 0 }}
      animate={{
        opacity: isInView ? 1 : 0,
      }}
      exit={{ opacity: 0 }}
      transition={{
        duration: .2,
        delay: (index+1) * 0.1,
      }}
    >{children}</motion.li>
  );
};

export default Item;