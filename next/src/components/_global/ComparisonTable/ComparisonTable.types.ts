export type ComparisonTableTypes = {
  heading: string;
  paragraph: string;
  table: {
    heading: string;
    rows: {
      title: string;
      description: string;
    }[];
  }[];
};
