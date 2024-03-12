import { Img_Query } from '@/components/ui/image';
import PersonPresentation from './PersonPresentation';
export default PersonPresentation;
export type { PersonPresentationTypes } from './PersonPresentation.types';

export const PersonPresentation_Query = `
  _type == "PersonPresentation" => {
    heading,
    img {
      ${Img_Query}
    },
    subheading,
    achievements[] {
      icon {
        ${Img_Query}
      },
      description,
    },
    paragraph,
  },
`;
