import styles from './TraitsListWithIcons.module.scss';
import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import type { TraitsListWithIconsTypes } from './TraitsListWithIcons.types';

const TraitsListWithIcons = ({ heading, list }: TraitsListWithIconsTypes) => {
  return (
    <section className={styles['TraitsListWithIcons']}>
      <header>
        <Markdown.h2>{heading}</Markdown.h2>
      </header>
      <ul>
        {list.map(({ icon, heading, paragraph }, i) => (
          <li
            key={i}
            className={styles.item}
          >
            <div className={styles.icon}>
              <Img
                data={icon}
                sizes='32px'
              />
            </div>
            <div>
              <h3>{heading}</h3>
              <Markdown className={styles.paragraph}>{paragraph}</Markdown>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TraitsListWithIcons;
