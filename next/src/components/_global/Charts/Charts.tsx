import styles from './Charts.module.scss';
import Bars from './_Bars';
import Circle from './_Circle';
import Linear from './_Linear';
import type { Chart, Props } from './Charts.types';

const componenets = (component: Chart) =>
  ({
    chart_Bars: <Bars {...component} />,
    chart_Linear: <Linear {...component} />,
    chart_Circle: <Circle {...component} />,
  } as unknown as { [key: string]: JSX.Element });

const Charts = ({ charts }: Props) => {
  return (
    <section className={styles['Charts']}>
      {charts.map((component, i) => (
        <div
          className={styles.item}
          key={i}
        >
          <p>{component.title}</p>
          {componenets(component)[component._type]}
        </div>
      ))}
    </section>
  );
};

export default Charts;
