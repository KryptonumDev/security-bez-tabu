import CourseDetails from './CourseDetails';
export default CourseDetails;
export type { CourseDetailsTypes } from './CourseDetails.types';

export const CourseDetails_Query = `
  _type == "CourseDetails" => {
    heading,
    list[] {
      heading,
      paragraph,
      duration,
    }
  },
`;
