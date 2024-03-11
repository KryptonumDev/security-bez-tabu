import type { CtaType } from '@/global/types';

export type ButtonType = (
  | {
      data: CtaType;
      href?: never;
      children?: never;
    }
  | {
      data?: never;
      href?: CtaType['href'];
      children: CtaType['text'];
      disabled?: boolean;
    }
) & { loading?: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;
