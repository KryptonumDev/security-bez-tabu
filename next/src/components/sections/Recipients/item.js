'use client'
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import scrollAnimation from '@/utils/scrollAnimation';

const Item = ({ children, index }) => {
  const wrapper = useRef(null);
  const isInView = useInView(wrapper, { once: true, margin: "0px 0px -13% 0px" });

  return (
    <motion.li
      ref={wrapper}
      {...scrollAnimation(isInView, (index+1) * 0.1)}
    >{children}</motion.li>
  );
};

export default Item;