import KeyDetails from './KeyDetails';
export default KeyDetails;
export type { KeyDetailsTypes } from './KeyDetails.types';

export const KeyDetails_Query = `
  _type == 'KeyDetails' => {
    list[] {
      heading,
      paragraph,
    },
  },
`;
