import { domain } from '@/global/Seo';

const isExternalLink = (href?: string) =>
  href &&
  ((href.startsWith('https://') && !href.startsWith(domain)) ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:'));

export default isExternalLink;