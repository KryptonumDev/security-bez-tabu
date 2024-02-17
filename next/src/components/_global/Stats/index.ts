import Stats from './Stats';

export type { Props as StatsProps } from './Stats.types';
export default Stats;

export const Stats_Query = /* groq */ `
_type == 'StatsList' => {
  list[] {
    number,
    name
  }
},`;