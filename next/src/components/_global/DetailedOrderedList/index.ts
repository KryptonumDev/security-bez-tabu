import DetailedOrderedList from './DetailedOrderedList';
export default DetailedOrderedList;
export type { DetailedOrderedListTypes } from './DetailedOrderedList.types';

export const DetailedOrderedList_Query = `
  _type == "DetailedOrderedList" => {
    heading,
    paragraph,
    list[] {
      heading,
      paragraph,
    },
  },
`;
