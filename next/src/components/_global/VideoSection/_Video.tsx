'use client';
import { useRef, useState } from 'react';
import type { VideoTypes } from './VideoSection.types';

const Video = ({ url, PlayIcon, ...props }: VideoTypes) => {
  const video = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      {...props}
      data-playing={isPlaying}
    >
      <div className='borderLeft' />
      <div className='borderRight' />
      {PlayIcon}
      <video
        ref={video}
        src={url}
        controls={true}
        autoPlay={false}
        loop={false}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default Video;
