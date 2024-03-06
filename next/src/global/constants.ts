/**
 * Global declaration of themeColor in HEX format.
 * @constant
 */
export const THEME_COLOR: string = '#0D111F';

/**
 * Global declaration of backgroundColor in HEX format.
 * @constant
 */
export const BACKGROUND_COLOR: string = '#0D111F';

/**
 * Global declaration of page language.
 * @constant
 */
export const LOCALE: string = 'pl';

/**
 * Global declaration of domain name of the website. Be aware of the protocol and www or non-www prefix.
 * @constant
 */
export const DOMAIN: string = 'https://lp.securitybeztabu.pl';

/**
 * Global declaration of default title.
 * @constant
 */
export const DEFAULT_TITLE: string = 'Security Bez Tabu';

/**
 * Global declaration of regex.
 * @constant
 */
export const REGEX: { email: RegExp; phone: RegExp; string: RegExp } = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  phone: /^(?:\+(?:\d{1,3}))?(?:[ -]?\(?\d{1,4}\)?[ -]?\d{1,5}[ -]?\d{1,5}[ -]?\d{1,6})$/,
  string: /^(?!\s+$)(.*?)\s*$/,
};

/**
 * Global declaration of easing.
 * @constant
 */
export const EASING = [0.65, 0.05, 0.36, 1];
