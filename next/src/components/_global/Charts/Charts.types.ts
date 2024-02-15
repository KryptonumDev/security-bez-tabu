export type Props = {
  _type: string;
  charts: Chart[];
};

export type Chart = {
  title: string;
  _type: string;
  charts: {
    title: string;
    number: number;
  }[];
  isAngle: boolean;
  item: {
    number: number;
    title: string;
  };
};
