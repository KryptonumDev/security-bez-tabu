export type ComparisonTableTypes = {
  heading: string;
  paragraph: string;
  table: {
    isHighlighted: boolean;
    heading: string;
    rows: {
      title: string;
      description: string;
    }[];
  }[];
};
