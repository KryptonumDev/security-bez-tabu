'use client';
import { useRef, useState } from 'react';
import type { VideoTypes } from './VideoSection.types';

const Video = ({ url, PlayIcon, ...props }: VideoTypes) => {
  const video = useRef(null);
  const [controls, setControls] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    const videoElement = video.current;
    if (!videoElement) return;
    if (videoElement.paused) {
      videoElement.play().then(() => setControls(true));
    }
  };

  return (
    <div
      {...props}
      data-playing={isPlaying}
      data-controls={controls}
    >
      <button
        onClick={playVideo}
        aria-label={isPlaying ? 'Zatrzymaj film' : 'Odtwórz film'}
      />
      {PlayIcon}
      <div className='borderLeft' />
      <div className='borderRight' />
      <video
        ref={video}
        src={url}
        controls={controls}
        autoPlay={false}
        loop={false}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default Video;
