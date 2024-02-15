import Error from '../Error';
import styles from './Input.module.scss';
import type { Props } from './Input.types';
import Textarea from './_TextArea';

const Input = ({ register, label, errors, textarea = false, type = 'text', ...props }: Props) => {
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
      <Error error={errors[register.name]} />
    </label>
  );
};

export default Input;
