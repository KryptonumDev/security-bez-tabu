import styles from './Switch.module.scss';

const Switch = ({ ...props }) => {
  return (
    <div className={styles['Switch']}>
      <input
        type='checkbox'
        {...props}
      />
      <div className={styles.dot}>
        <Tick className={styles.tick} />
      </div>
    </div>
  );
};

export default Switch;

const Tick = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={8}
    viewBox='0 0 10 8'
    fill='none'
    {...props}
  >
    <path
      d='m1 4 2.5 2.5L9 1'
      stroke='#C4CDD9'
      strokeLinecap='round'
    />
  </svg>
);
