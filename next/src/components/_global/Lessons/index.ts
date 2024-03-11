import Lessons from './Lessons';
export type { Props as LessonsProps } from './Lessons.types';
export default Lessons;

export const Lessons_Query = /* groq */ `
  _type == 'Lessons' => {
    paragraph,
    heading,
    list[] {
      title,
      lessons[],
    },
  },
`;
