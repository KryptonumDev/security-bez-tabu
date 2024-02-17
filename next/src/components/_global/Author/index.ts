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
        asset -> {
          altText,
          url,
          metadata {
            lqip,
            dimensions {
              width,
              height
            }
          }
        }
      }
    },
  img {
    asset -> {
      altText,
      url,
      metadata {
        lqip,
        dimensions {
          width,
          height
        }
      }
    }
  }
},`;