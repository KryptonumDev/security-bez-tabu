import Charts from './Charts';
export type { ChartsTypes } from './Charts.types';
export default Charts;

export const Charts_Query = /* groq */ `
  _type == 'Charts' => {
    charts[] {
      title,
      _type,
      _type == 'Charts_Bars' => {
        charts[] {
          title,
          number,
        },
      },
      _type == 'Charts_Linear' => {
        isAngle,
        item {
          number,
          title,
        },
      },
      _type == 'Charts_Circle' => {
        item {
          number,
          title,
        },
      },
    },
  },
`;
