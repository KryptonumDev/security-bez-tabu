export type VideoSectionTypes = {
  heading: string;
  video: {
    url: string;
  };
};

export type VideoTypes = {
  url: string;
  PlayIcon: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
