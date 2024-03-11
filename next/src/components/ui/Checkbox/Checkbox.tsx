import Error from '../Error';
import styles from './Checkbox.module.scss';
import type { CheckboxTypes } from './Checkbox.types';

const Checkbox = ({ register, label, errors, ...props }: CheckboxTypes) => {
  return (
    <label
      className={styles.label}
      aria-invalid={Boolean(errors[register.name])}
    >
      <div className={styles.icon}>
        <input
          {...register}
          name={register.name}
          type='checkbox'
          {...props}
        />
        <Check />
      </div>
      <p className='label'>{label}</p>
      {errors && <Error error={errors[register.name]?.message?.toString()} />}
    </label>
  );
};

export default Checkbox;

const Check = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    viewBox='0 0 24 24'
  >
    <path
      stroke='#53BAFD'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      d='M7 12.9l3.143 3.6L18 7.5'
    ></path>
  </svg>
);
