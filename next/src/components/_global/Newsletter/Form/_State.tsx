import Button from '@/components/ui/Button';
import styles from '../Newsletter.module.scss';
import type { StateTypes, StatusIconTypes } from '../Newsletter.types';

const State = ({ isSuccess, setStatus, StatusIcon }: StateTypes & StatusIconTypes) => {
  return (
    isSuccess !== undefined && (
      <div
        className={styles['State']}
        data-success={isSuccess}
      >
        {isSuccess ? (
          <>
            <h3>
              {StatusIcon.Success} <span>Dziękujmey za zapis!</span>
            </h3>
            <p>Twój adres e-mail został pomyślnie zapisany do naszego newslettera!</p>
          </>
        ) : (
          <>
            <h3>
              {StatusIcon.Error} <span>Coś poszło nie tak...</span>
            </h3>
            <p>Twój adres e-mail został pomyślnie zapisany do naszego newslettera!</p>
            <Button
              type='button'
              onClick={() => setStatus({ sending: false, success: undefined })}
            >
              Spróbuj ponownie
            </Button>
          </>
        )}
      </div>
    )
  );
};

export default State;
