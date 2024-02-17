import LargeImage from './LargeImage';

export default LargeImage;

export const LargeImage_Query = /* groq */ `
_type == 'LargeImage' => {
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
},`;