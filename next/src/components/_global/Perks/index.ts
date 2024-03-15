import Perks from './Perks';

export type { PerksTypes } from './Perks.types';
export default Perks;

export const Perks_Query = /* groq */ `
  _type == 'Perks' => {
    heading,
    list[] {
      title,
      description,
    },
  },
`;
