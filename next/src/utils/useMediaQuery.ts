'use client';
import { useState, useEffect } from 'react';

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', listener);
    } else {
      media.addEventListener('change', listener);
    }
    return () => {
      if (typeof media.removeEventListener === 'function') {
        media.removeEventListener('change', listener);
      } else {
        media.removeEventListener('change', listener);
      }
    };
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
