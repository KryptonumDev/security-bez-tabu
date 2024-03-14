import type { ComponentsTypes } from '@/components/Components';

export type PageQueryType = {
  name: string;
  countdown_Date?: string;
  content: ComponentsTypes['data'];
};
