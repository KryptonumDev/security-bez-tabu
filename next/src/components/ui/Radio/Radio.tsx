import styles from './Radio.module.scss';
import type { RadioTypes } from './Radio.types';

const Radio = ({ register, label, errors, ...props }: RadioTypes) => {
  return (
    <label
      className={styles.label}
      aria-invalid={Boolean(errors[register.name])}
    >
      <input
        {...register}
        name={register.name}
        type='radio'
        {...props}
      />
      <div className={styles.indicator}></div>
      <p>{label}</p>
    </label>
  );
};

export default Radio;
