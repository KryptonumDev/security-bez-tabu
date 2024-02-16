import { type ComponentProps } from '@/components/Components';

export type ImgType = {
  asset: {
    url: string;
    altText: string;
    metadata: {
      dimensions: {
        width: number;
        height: number;
      };
      lqip: string;
    };
  };
};

export type generateMetadataProps = {
  slug?: string;
  seo: {
    title: string;
    description: string;
  };
};

export type HomePageQueryProps = {
  hero_Heading: string;
  hero_Paragraph: string;
  hero_Claim: string;
  hero_Cta: {
    theme: string;
    text: string;
    href: string;
  };
  hero_AdditionalInfo: string;
  hero_Img: ImgType;
  hero_Products: {
    title: string;
    description: string;
    img: ImgType;
  }[];
  name: string;
  slug?: string;
  content: ComponentProps[];
} & generateMetadataProps;

export type NotFoundPageQueryProps = {
  hero_Heading: string;
  hero_Paragraph: string;
  hero_Cta: Cta;
  hero_Img: ImgType;
} & generateMetadataProps;

export type PrivacyPolicyPageQueryProps = {
  hero_Heading: string;
  hero_Paragraph: string;
  content: {
    title: string;
    description: string[];
  }[];
} & generateMetadataProps;

export type SeoProps = {
  robotsIndex: boolean;
  seo: {
    og_Img: ImgType;
  };
};

export type Cta = {
  theme: string;
  href: string;
  text: string;
};

export interface Node {
  children?: Node[];
  style?: string;
  text?: string;
  subheadings?: Node[];
  slug?: string;
  _type?: string;
  marks?: string;
  icon?: ImgType;
}
