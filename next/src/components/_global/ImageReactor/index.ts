import ImageReactor from './ImageReactor';
export default ImageReactor;
import { Cta_Query } from '@/components/ui/Button';
import { Img_Query } from '@/components/ui/image';
export type { ImageReactorTypes } from './ImageReactor.types';

export const ImageReactor_Query = `
  _type == "ImageReactor" => {
    isHighlighted,
    heading,
    paragraph,
    cta {
      ${Cta_Query}
    },
    additionalInfo,
    img {
      ${Img_Query}
    },
  },
`;
