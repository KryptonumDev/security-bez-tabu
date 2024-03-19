import Markdown from '@/components/ui/markdown';
import styles from './VideoSection.module.scss';
import Video from './_Video';
import type { VideoSectionTypes } from './VideoSection.types';

const VideoSection = ({ heading, video }: VideoSectionTypes) => {
  return (
    <section className={styles['VideoSection']}>
      <header>
        <Markdown.h2 className='h3'>{heading}</Markdown.h2>
      </header>
      <Video
        className={styles.video}
        url={video.url}
        PlayIcon={PlayIcon}
      />
    </section>
  );
};

export default VideoSection;

const PlayIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={71}
    height={75}
    viewBox='0 0 71 75'
    fill='none'
  >
    <path
      d='M63.981 27.443c7.692 4.183 7.692 15.011 0 19.194L17.538 71.893C10.062 75.958.875 70.667.875 62.296V11.784c0-8.37 9.187-13.662 16.663-9.597L63.98 27.443Z'
      fill='#92D4FF'
      fillOpacity={0.5}
      stroke='#53BAFD'
      strokeWidth={1.5}
      strokeLinecap='round'
    />
  </svg>
);
