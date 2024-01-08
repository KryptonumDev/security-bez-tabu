import Bars from './Bars';
import Circle from './Circle';
import Linear from './Linear';
import styles from './styles.module.scss';

const componenets = component => ({
  chart_Bars: <Bars {...component} />,
  chart_Linear: <Linear {...component} />,
  chart_Circle: <Circle {...component} />,
})

const Charts = ({ charts }) => {
  return (
    <section className={styles.wrapper}>
      {charts.map((component, i) => (
        <div className={styles.item} key={i}>
          <p>{component.title}</p>
          {componenets(component)[component._type]}
        </div>
      ))}
    </section>
  );
};

export default Charts;