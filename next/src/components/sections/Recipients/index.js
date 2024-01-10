import Markdown from '@/components/atoms/Markdown';
import styles from './styles.module.scss';
import Img from '@/components/atoms/Img';
import Item from './item';
import Heading from './heading';

const Recipients = ({
  heading,
  list
}) => {
  return (
    <section className={styles.wrapper}>
      <Heading>
        <Markdown.h2>{heading}</Markdown.h2>
      </Heading>
      <ul>
        {list.map(({ img, title }, i) => (
          <Item key={i} index={i}>
            <div className={styles.icon}>
              <Img data={img} />
            </div>
            <Markdown>{title}</Markdown>
            <Decoration className={styles.decoration} />
          </Item>
        ))}
      </ul>
    </section>
  );
};

export default Recipients;

const Decoration = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='254'
    height='50'
    fill='none'
    viewBox='0 0 254 50'
    {...props}
  >
    <path
      stroke='#0D111F'
      strokeWidth='6'
      d='M248 46.5h3V3H7.062l4.14 4.93 31.5 37.5.9 1.07H248z'
    ></path>
  </svg>
)