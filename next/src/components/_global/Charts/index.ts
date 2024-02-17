import Charts from './Charts';

export type { Props as ChartsProps } from './Charts.types';
export default Charts;

export const Charts_Query = /* groq */ `
_type == 'Charts' => {
  charts[] {
    title,
    _type,
    _type == 'chart_Bars' => {
      charts[] {
        title, 
        number
      }
    },
    _type == 'chart_Linear' => {
      isAngle,
        item {
          number,
          title
        }
    },
    _type == 'chart_Circle' => {
      item {
        number,
          title
      }
    }
  }
},`;