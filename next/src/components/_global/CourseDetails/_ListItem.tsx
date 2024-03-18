'use client';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const ListItem = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '0px 0px -50% 0px' });

  return (
    <li
      ref={ref}
      data-visible={isInView}
    >
      {children}
    </li>
  );
};

export default ListItem;
