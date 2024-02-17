import Certificate from './Certificate';

export type { Props as CertificateProps } from './Certificate.types';
export default Certificate;

export const Certificate_Query = /* groq */ `
_type == 'Certificate' => {
  paragraph,
  heading,
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