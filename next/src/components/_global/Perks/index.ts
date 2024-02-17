import Perks from './Perks';

export type { Props as PerksProps } from './Perks.types';
export default Perks;

export const Perks_Query = /* groq */ `
  _type == 'Perks' => {
  heading,
  list[] {
    description,
    title
  }
},`;
