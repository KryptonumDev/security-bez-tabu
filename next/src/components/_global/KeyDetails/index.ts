import KeyDetails from './KeyDetails';
export default KeyDetails;
export type { Props as KeyDetailsProps } from './KeyDetails.types';

export const KeyDetails_Query = `
  _type == 'KeyDetails' => {
    list[] {
      title,
      description,
    }
  },
`;
