import Markdown from '@/components/atoms/Markdown';
import styles from './styles.module.scss';
import Img from '@/components/atoms/Img';

const Reviews = ({
  heading,
  list,
}) => {
  list = list.map(({ img, content, ...props }) => ({
    img: img ? <Img data={img} sizes='64px' /> : <UserPlaceholder />,
    content: <Markdown className={styles.content}>{content}</Markdown>,
    ...props
  }));
  
  return (
    <section className={styles.wrapper}>
      <header>
        <Markdown.h2>{heading}</Markdown.h2>
      </header>
      <ul className={styles.list}>
        {list.map(({ img, name, position, content }, i) => (
          <li className={styles.item} key={i}>
            <div className={styles.author}>
              <div className={styles.img}>
                {img}
              </div>
              <div>
                <h3>{name}</h3>
                <p className={styles.position}>{position}</p>
              </div>
            </div>
            {content}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Reviews;

const UserPlaceholder = ({ ...props }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='44' height='50' viewBox='0 0 44 50' fill='none' {...props}>
    <path
      stroke='#282E4B'
      d='M41.749 5.039c-17.765-7.315-33.581-3.048-39.269 0C-4.105 35.355 12.826 46.978 22.114 49 44.475 43.303 44.522 17.319 41.75 5.039z'
    ></path>
    <ellipse
      cx='21.997'
      cy='17.317'
      stroke='#53BAFD'
      strokeWidth='1.5'
      rx='4.995'
      ry='5.122'
    ></ellipse>
    <ellipse
      cx='21.997'
      cy='31.403'
      stroke='#53BAFD'
      strokeWidth='1.5'
      opacity='0.5'
      rx='8.741'
      ry='5.122'
    ></ellipse>
  </svg>
);