import ComparisonTable from './ComparisonTable';
export default ComparisonTable;
export type { ComparisonTableTypes } from './ComparisonTable.types';

export const ComparisonTable_Query = `
  _type == "ComparisonTable" => {
    heading,
    paragraph,
    table[] {
      heading,
      rows[] {
        title,
        description
      }
    }
  },
`;
