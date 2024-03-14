import Idea from './Idea';
export default Idea;
import { Cta_Query } from '@/components/ui/Button';
export type { IdeaTypes } from './Idea.types';

export const Idea_Query = /* groq */ `
  _type == 'Idea' => {
    paragraph,
    additionalInfo,
    chartParagraph,
    heading,
    claim,
    chart[] {
      title,
      description,
    },
    cta {
      ${Cta_Query}
    },
  },
`;
