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
              {StatusIcon.Success} <span>Dziękujemy za zapis!</span>
            </h3>
            <p>Od teraz będziemy informować Cię o aktualnościach z Security Bez Tabu!</p>
          </>
        ) : (
          <>
            <h3>
              {StatusIcon.Error} <span>Nie udało się zapisać...</span>
            </h3>
            <p>Podczas przesyłania informacji pojawił się problem z serwerem. Spróbuj ponownie!</p>
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
