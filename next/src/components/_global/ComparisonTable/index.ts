import ComparisonTable from './ComparisonTable';
export default ComparisonTable;
export type { ComparisonTableTypes } from './ComparisonTable.types';

export const ComparisonTable_Query = /* groq */ `
  _type == "ComparisonTable" => {
    heading,
    paragraph,
    table[] {
      isHighlighted,
      heading,
      rows[] {
        title,
        description,
      },
    },
  },
`;
