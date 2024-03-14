import { Img_Query } from '@/components/ui/image';
import TeamIntroduction from './TeamIntroduction';
export default TeamIntroduction;
export type { TeamIntroductionTypes } from './TeamIntroduction.types';

export const TeamIntroduction_Query = `
  _type == "TeamIntroduction" => {
    heading,
    paragraph,
    list[] {
      img {
        ${Img_Query}
      },
      heading,
      description
    }
  },
`;
