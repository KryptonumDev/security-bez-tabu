import Benefits from './Benefits';
export type { Props as BenefitsProps } from './Benefits.types';
export default Benefits;

export const Benefits_Query = `
  _type == 'Benefits' => {
    heading,
    list[] {
      description,
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
    }
  },`;
