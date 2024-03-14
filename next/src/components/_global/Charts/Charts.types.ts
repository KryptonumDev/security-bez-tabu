export type ChartsTypes = {
  _type: string;
  charts: Chart[];
};

export type Chart = {
  _type: string;
  title: string;
  charts: {
    title: string;
    number: number;
  }[];
  isAngle?: boolean;
  item: {
    number: number;
    title: string;
  };
};
