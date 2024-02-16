import React from 'react';
import Image from 'next/image';
import { type ImgType } from '@/global/types';

const defaultPlaceholder =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUltCqBwABcQDWMIsO5gAAAABJRU5ErkJggg==';

type ImgProps = {
  data: ImgType;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
};

const Img = ({ data, src = '', alt = '', width, height, sizes, priority = false, ...props }: ImgProps) => (
  <Image
    src={data?.asset.url || src}
    alt={data?.asset.altText || alt}
    width={data?.asset.metadata?.dimensions?.width || width}
    height={data?.asset.metadata?.dimensions?.height || height}
    priority={priority}
    sizes={sizes}
    {...(((width || data?.asset.metadata.dimensions?.width) > 40 ||
      (height || data?.asset.metadata.dimensions?.height) > 40) && {
      placeholder: 'blur',
      blurDataURL: data?.asset.metadata?.lqip || defaultPlaceholder,
    })}
    {...props}
  />
);

export default Img;

export const Img_Query = `
  asset -> {
    url,
    altText,
    metadata {
      lqip,
      dimensions {
        width,
        height,
      },
    },
  },
`;
