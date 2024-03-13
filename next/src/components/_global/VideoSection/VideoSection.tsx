import styles from './VideoSection.module.scss';
import type { VideoSectionTypes } from './VideoSection.types';

const VideoSection = ({ heading, video }: VideoSectionTypes) => {
  return <section className={styles['VideoSection']}></section>;
};

export default VideoSection;
