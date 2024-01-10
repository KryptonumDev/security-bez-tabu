import Markdown from '@/components/atoms/Markdown';
import styles from './styles.module.scss';
import Chips from './Chips';
import Heading from './heading';
import Item from './item';

const Perks = ({
  heading,
  list,
}) => {
  return (
    <section className={styles.wrapper}>
      <Heading>
        <Markdown.h2>{heading}</Markdown.h2>
      </Heading>
      <ul>
        {list.map(({ title, description }, i) => (
          <Item key={i} index={i}>
            <div>
              <Markdown.h3>{title}</Markdown.h3>
              <Markdown>{description}</Markdown>
            </div>
            <Decoration className={styles.decoration} />
          </Item>
        ))}
      </ul>
      <Chips />
    </section>
  );
};

export default Perks;

const Decoration = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='228'
    height='34'
    fill='none'
    viewBox='0 0 228 34'
    {...props}
  >
    <path
      stroke='#0D111F'
      strokeWidth='6'
      d='M222 30.5h3V3H8.277l5.698 5.213 23.5 21.5.86.787H222z'
    ></path>
  </svg>
)