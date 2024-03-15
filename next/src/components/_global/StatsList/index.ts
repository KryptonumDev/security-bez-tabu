import StatsList from './StatsList';
export type { StatsListTypes } from './StatsList.types';
export default StatsList;

export const StatsList_Query = /* groq */ `
  _type == 'StatsList' => {
    list[] {
      number,
      name,
    },
  },
`;
