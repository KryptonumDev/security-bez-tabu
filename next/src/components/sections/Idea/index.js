import Markdown from '@/components/atoms/Markdown';
import styles from './styles.module.scss';
import Countdown from '@/components/moleculas/countdown';
import Button from '@/components/atoms/Button';
import Chart from './chart';

const Idea = ({
  heading,
  paragraph,
  claim,
  cta,
  additionalInfo,
  chartParagraph,
  chart,
}) => {
  chart = chart.map(({ title, description }) => ({
    title: <Markdown className={styles.title}>{title}</Markdown>,
    description: <Markdown className={styles.description}>{description}</Markdown>,
  }));

  return (
    <section className={styles.wrapper}>
      <header>
        <Markdown.h2>{heading}</Markdown.h2>
        <div>
          <Markdown className={styles.paragraph}>{paragraph}</Markdown>
          <h3 className={styles.claim}>{claim}</h3>
          <Button data={cta} className={styles.btn} />
          <Markdown className={styles.additionalInfo}>{additionalInfo}</Markdown>
          <Countdown className={styles.countdown} />
        </div>
      </header>
      <div>
        <Markdown className={`${styles.chartParagraph} h3`}>{chartParagraph}</Markdown>
        <Chart {...{chart}} />
      </div>
    </section>
  );
};

export default Idea;