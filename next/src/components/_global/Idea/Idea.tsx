import styles from './Idea.module.scss';
import Chart from './_Chart';
import type { Props } from './Idea.types';
import Markdown from '@/components/ui/markdown';
import Button from '@/components/ui/Button';
import Countdown from '@/components/ui/Countdown';

const Idea = ({ heading, paragraph, claim, cta, additionalInfo, chartParagraph, chart }: Props) => {
  const newCharts = chart.map(({ title, description }) => ({
    title: <Markdown className={styles.title}>{title}</Markdown>,
    description: <Markdown className={styles.description}>{description}</Markdown>,
  }));

  return (
    <section className={styles['Idea']}>
      <header>
        <Markdown.h2>{heading}</Markdown.h2>
        <div>
          <Markdown className={styles.paragraph}>{paragraph}</Markdown>
          <h3 className={styles.claim}>{claim}</h3>
          <Button
            data={cta}
            className={styles.btn}
          />
          <Markdown className={styles.additionalInfo}>{additionalInfo}</Markdown>
          <Countdown className={styles.countdown} />
        </div>
      </header>
      <div>
        <Markdown className={`${styles.chartParagraph} h3`}>{chartParagraph}</Markdown>
        <Chart {...{ newCharts }} />
      </div>
    </section>
  );
};

export default Idea;
