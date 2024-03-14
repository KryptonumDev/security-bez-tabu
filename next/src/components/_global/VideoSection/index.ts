import VideoSection from './VideoSection';
export default VideoSection;
export type { VideoSectionTypes } from './VideoSection.types';

export const VideoSection_Query = `
  _type == "VideoSection" => {
    heading,
    video {
      asset -> {
        url,
        path,
        originalFilename,
        size,
      },
    },
  },
`;
