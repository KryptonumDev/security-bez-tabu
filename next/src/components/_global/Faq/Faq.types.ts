import type { FormStatusTypes } from '@/global/types';

export type FaqTypes = {
  heading: string;
  paragraph: string;
  list: {
    title: string;
    description: string;
  }[];
};

export type ListTypes = {
  list: {
    question: React.ReactNode;
    answer: React.ReactNode;
  }[];
  indicator: React.ReactNode;
};

export type FormTypes = {
  StatusIcon: {
    Error: React.ReactNode;
    Success: React.ReactNode;
  };
};

export type StateTypes = {
  isSuccess: boolean | undefined;
  setStatus: React.Dispatch<React.SetStateAction<FormStatusTypes>>;
};
