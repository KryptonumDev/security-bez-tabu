export type ComparisonTableTypes = {
  heading: string;
  paragraph: string;
  table: {
    heading: string;
    rows: {
      paragraph: string;
      title: string;
    }[];
  }[];
};
