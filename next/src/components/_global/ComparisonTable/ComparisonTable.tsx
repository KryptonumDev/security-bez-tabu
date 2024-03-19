import Markdown from '@/components/ui/markdown';
import styles from './ComparisonTable.module.scss';
import type { ComparisonTableTypes } from './ComparisonTable.types';

const ComparisonTable = ({ heading, paragraph, table }: ComparisonTableTypes) => {
  return (
    <section className={styles['ComparisonTable']}>
      <header>
        <Markdown.h2 className='h3'>{heading}</Markdown.h2>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
      </header>
      <table className={styles.table}>
        {table.map(({ isHighlighted, heading, rows }, i) => (
          <tbody
            key={i}
            data-highlighted={!!isHighlighted}
          >
            <tr>
              <th colSpan={2}>
                {!!isHighlighted && (
                  <>
                    <div
                      className='borderLeft'
                      aria-hidden={true}
                    ></div>
                    <div
                      className='borderRight'
                      aria-hidden={true}
                    ></div>
                  </>
                )}
                <h3>{heading}</h3>
              </th>
            </tr>
            {rows.map(({ title, description }, i) => (
              <tr key={i}>
                <td>
                  <p>{title}</p>
                  <p>{description}</p>
                </td>
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </section>
  );
};

export default ComparisonTable;
