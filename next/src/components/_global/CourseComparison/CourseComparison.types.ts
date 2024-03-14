export type CourseComparisonTypes = {
  heading: string;
  paragraph: string;
  plans: {
    isHighlighted: boolean;
    heading: string;
    list: {
      name: string;
      isPositive: boolean;
    }[];
  }[];
};
