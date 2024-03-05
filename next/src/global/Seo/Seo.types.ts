import type { Metadata } from 'next';

export type SeoType = {
  title: string;
  description: string;
  path: string;
} & Metadata;

export type GlobalQueryType = {
  robotsIndex: boolean;
  og_Img: string;
};

export type SeoQueryType = {
  seo: {
    title: string;
    description: string;
  };
};
