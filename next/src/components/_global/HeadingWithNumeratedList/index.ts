import HeadingWithNumeratedList from './HeadingWithNumeratedList';

export default HeadingWithNumeratedList;
export type { Props as HeadingWithNumeratedListProps } from './HeadingWithNumeratedList.types';

export const HeadingWithNumeratedList_Query = /* groq */ `
  _type == "HeadingWithNumeratedList" => {
    heading,
    list[] {
      title,
      description,
    }
  },
`;
