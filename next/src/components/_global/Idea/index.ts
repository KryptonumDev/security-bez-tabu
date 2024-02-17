import Idea from './Idea';

export type { Props as IdeaProps } from './Idea.types';
export default Idea;

export const Idea_Query = /* groq */ `
_type == 'Idea' => {
  paragraph,
  additionalInfo,
  chartParagraph,
  heading,
  claim,
  chart[] {
    title,
    description
  },
  cta {
    href,
    text,
    theme
  }
},`;