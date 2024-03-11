import type { CtaType, ImgType } from '@/global/types';

export type Props = {
  advancedCtaSection_LeftSide: {
    heading: string;
    description: string;
  };
  advancedCtaSection_RightSide: {
    heading: string;
    additionalInfo: string;
    image?: ImgType;
    cta: CtaType;
    description?: string;
  };
};
