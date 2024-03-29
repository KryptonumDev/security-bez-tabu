export type CtaType = {
  href: string;
  text: string | React.ReactNode;
};

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

export type generateStaticParamsType = {
  slug: string;
}[];

export type FormStatusTypes = {
  sending: boolean;
  success: boolean | undefined;
};
