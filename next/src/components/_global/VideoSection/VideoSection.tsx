import Markdown from '@/components/ui/markdown';
import styles from './VideoSection.module.scss';
import type { VideoSectionTypes } from './VideoSection.types';

const VideoSection = ({ heading }: VideoSectionTypes) => {
  return (
    <section className={styles['VideoSection']}>
      <Markdown.h2>{heading}</Markdown.h2>
    </section>
  );
};

export default VideoSection;
