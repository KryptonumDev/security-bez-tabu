import { domain } from '@/global/constants';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${domain}/sitemap.xml`,
  };
}
