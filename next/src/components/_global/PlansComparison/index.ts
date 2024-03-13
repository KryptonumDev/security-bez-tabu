import { Cta_Query } from '@/components/ui/Button';
import PlansComparison from './PlansComparison';
export default PlansComparison;
export type { PlansComparisonTypes } from './PlansComparison.types';

export const PlansComparison_Query = `
  _type == "PlansComparison" => {
    heading,
    plans[] {
      isMostPopular,
      heading,
      price,
      features[],
      cta {
        ${Cta_Query}
      }
    }
  },
`;
