import type { ImgType } from '@/global/types';
import type { FormStatusTypes } from '@/global/types';

export type NewsletterTypes = {
  heading: string;
  paragraph: string;
  image: ImgType;
};

export type StateTypes = {
  isSuccess: boolean | undefined;
  setStatus: React.Dispatch<React.SetStateAction<FormStatusTypes>>;
};

export type StatusIconTypes = {
  StatusIcon: {
    Error: React.ReactNode;
    Success: React.ReactNode;
  };
};
