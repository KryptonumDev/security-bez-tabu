import { Img_Query } from '@/components/ui/image';
import Author from './Author';
export type { Props as AuthorProps } from './Author.types';
export default Author;

export const Author_Query = /* groq */ `
  _type == 'Author' => {
    paragraph,
    heading,
    subheading,
    achievements[] {
      title,
      img {
        ${Img_Query}
      },
    },
    img {
      ${Img_Query}
    },
  },
`;
