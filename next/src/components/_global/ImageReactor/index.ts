import { Cta_Query } from '@/components/ui/Button';
import ImageReactor from './ImageReactor';
import { Img_Query } from '@/components/ui/image';
export default ImageReactor;
export type { ImageReactorTypes } from './ImageReactor.types';

export const ImageReactor_Query = `
  _type == "ImageReactor" => {
    paragraph,
    heading,
    cta {
      ${Cta_Query}
    },
    additionalInfo,
    img {
      ${Img_Query}
    },
    isHighlighted,
  },
`;