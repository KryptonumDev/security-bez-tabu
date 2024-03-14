import Button from '@/components/ui/Button';
import styles from '../Faq.module.scss';
import type { FormTypes, StateTypes } from '../Faq.types';

const State = ({ isSuccess, setStatus, StatusIcon }: StateTypes & FormTypes) => {
  return (
    isSuccess !== undefined && (
      <div
        className={styles['State']}
        data-success={isSuccess}
      >
        {isSuccess ? (
          <>
            <h3>
              {StatusIcon.Success} <span>Dziękujemy za wiadomość!</span>
            </h3>
            <p>Twoja wiadomość właśnie wpadła do naszej skrzynki. Odpowiemy na nią najszybciej jak to możliwe.</p>
          </>
        ) : (
          <>
            <h3>
              {StatusIcon.Error} <span>Nie udało się wysłać wiadomości...</span>
            </h3>
            <p>Napotkaliśmy drobne problemy podczas przesyłania formularza. Spróbuj przesłać go ponownie.</p>
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
