'use client'
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import scrollAnimation from '@/utils/scrollAnimation';

const Item = ({ children, ...props }) => {
  const wrapper = useRef(null);
  const isInView = useInView(wrapper, { once: true, margin: "0px 0px -13% 0px" });

  return (
    <motion.li
      ref={wrapper}
      {...props}
      {...scrollAnimation(isInView)}
    >{children}</motion.li>
  );
};

export default Item;