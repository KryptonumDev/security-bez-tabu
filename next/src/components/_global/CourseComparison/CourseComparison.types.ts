export type CourseComparisonTypes = {
  heading: string;
  paragraph: string;
  plans: {
    heading: string;
    list: {
      name: string;
      isPositive: boolean;
    }
  };
};
