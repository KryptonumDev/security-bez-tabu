import React from 'react';
import Image from 'next/image';

const defaultPlaceholder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUltCqBwABcQDWMIsO5gAAAABJRU5ErkJggg==';

const Img = ({ data, src, alt = '', width, height, ...props }) => (
  <Image
    src={data?.asset.url || src}
    alt={data?.asset.altText || alt}
    width={data?.asset.metadata?.dimensions?.width || data?.asset.metadata?.width || width}
    height={data?.asset.metadata?.dimensions?.height || data?.asset.metadata?.height || height}
    {...(((width || data?.asset.metadata.dimensions?.width) > 40 ||
      (height || data?.asset.metadata.dimensions?.height) > 40) && {
      placeholder: 'blur',
      blurDataURL: data?.asset.metadata?.lqip || defaultPlaceholder,
    })}
    {...props}
  />
);

export default Img;