'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import scrollAnimation from '@/utils/scrollAnimation';

const Heading = ({ children }: { children: React.ReactNode }) => {
  const wrapper = useRef(null);
  const isInView = useInView(wrapper, { once: true, margin: '0px 0px -13% 0px' });

  return (
    <motion.header
      ref={wrapper}
      {...scrollAnimation(isInView)}
    >
      {children}
    </motion.header>
  );
};

export default Heading;
