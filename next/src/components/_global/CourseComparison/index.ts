import CourseComparison from './CourseComparison';
export default CourseComparison;
export type { CourseComparisonTypes } from './CourseComparison.types';

export const CourseComparison_Query = `
  _type == "CourseComparison" => {
    heading,
    paragraph,
    plans[] {
      heading,
      list[] {
        name,
        isPositive
      }
    }
  },
`;
