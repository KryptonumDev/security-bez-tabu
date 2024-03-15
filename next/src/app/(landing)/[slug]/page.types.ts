import type { ComponentsTypes } from '@/components/Components';
import type { CtaType } from '@/global/types';

export type PageQueryType = {
  name: string;
  cta: CtaType;
  countdown_Date?: string;
  content: ComponentsTypes['data'];
};
