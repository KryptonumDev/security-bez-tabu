import Error from '../ui/Error';
import Textarea from './_Textarea';
import styles from './Input.module.scss';
import type { InputTypes } from './Input.types';

const Input = ({ register, label, errors, textarea = false, type = 'text', ...props }: InputTypes) => {
  return (
    <label
      className={styles.Input}
      aria-invalid={Boolean(errors[register.name])}
    >
      <p dangerouslySetInnerHTML={{ __html: label }} />
      {textarea ? (
        <Textarea
          rows={5}
          {...register}
          name={register.name}
          {...props}
        />
      ) : (
        <input
          {...register}
          name={register.name}
          type={type}
          {...props}
        />
      )}
      {errors && <Error error={errors[register.name]?.message?.toString()} />}
    </label>
  );
};

export default Input;
