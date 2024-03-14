export type DetailedOrderedListTypes = {
  heading: string;
  paragraph?: string;
  list: {
    heading: string;
    paragraph: string;
  }[];
};

export type ListTypes = {
  list: {
    heading: React.ReactNode;
    paragraph: React.ReactNode;
  }[];
  animationDelays: {
    left: string;
    right: string;
  }[];
} & React.HTMLAttributes<HTMLOListElement>;
