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
