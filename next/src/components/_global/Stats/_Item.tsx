'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { scrollAnimation } from '@/utils/scroll-animation';

const Item = ({ children, index }: { children: React.ReactNode; index: number }) => {
  const wrapper = useRef(null);
  const isInView = useInView(wrapper, { once: true, margin: '0px 0px -13% 0px' });

  return (
    <motion.li
      ref={wrapper}
      {...scrollAnimation(isInView, index * 0.1)}
    >
      {children}
    </motion.li>
  );
};

export default Item;
