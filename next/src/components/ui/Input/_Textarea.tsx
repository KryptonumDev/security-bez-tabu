'use client';
import { forwardRef } from 'react';
import type { TextareaType } from './Input.types';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaType>(({ name, ...props }, ref) => {
  const handleExpand = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight + 2}px`;
  };

  return (
    <textarea
      name={name}
      onInput={handleExpand}
      ref={ref}
      {...props}
    />
  );
});

export default Textarea;

Textarea.displayName = 'Textarea';
