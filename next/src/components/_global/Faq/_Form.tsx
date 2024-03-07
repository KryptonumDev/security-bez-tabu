'use client';
import { useState } from 'react';
import { type FieldValues, useForm } from 'react-hook-form';
import Link from 'next/link';
import styles from './Faq.module.scss';
import { REGEX } from '@/global/constants';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Checkbox from '@/components/ui/Checkbox';

const Form = ({ StatusIcon }: { StatusIcon: { Error: React.JSX.Element; Success: React.JSX.Element } }) => {
  const [status, setStatus] = useState({ sending: false, success: undefined as boolean | undefined });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });

  const onSubmit = async (data: FieldValues) => {
    setStatus({ sending: true, success: undefined });
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const responseData = (await response.json()) as { success: boolean };
      if (response.ok && responseData.success) {
        setStatus({ sending: false, success: true });
        reset();
      } else {
        setStatus({ success: false, sending: false });
      }
    } catch {
      setStatus({ sending: false, success: false });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit) as React.FormEventHandler}>
      <Input
        label='E-mail'
        type='email'
        register={register('email', {
          required: { value: true, message: `E-mail jest wymagany` },
          pattern: { value: REGEX.email, message: `Niepoprawny adres e-mail` },
        })}
        errors={errors}
      />
      <Input
        label='Pytanie'
        textarea={true}
        register={register('message')}
        errors={errors}
      />
      <Checkbox
        label={
          <>
            Akceptuję{' '}
            <Link
              className='link'
              href='/polityka-prywatnosci'
              target='_blank'
              rel='noreferrer'
            >
              politykę prywatności
            </Link>
          </>
        }
        register={register('legal', {
          required: { value: true, message: `Zgoda jest wymagana` },
        })}
        errors={errors}
      />
      <Button
        type='submit'
        disabled={status?.sending}
        loading={status?.sending}
      >
        Wyślij wiadomość
      </Button>
      {status.success !== undefined && (
        <div
          className={styles.state}
          aria-hidden={status.success === undefined}
          aria-invalid={!status.success}
        >
          <h3>
            {status.success ? StatusIcon.Success : StatusIcon.Error}
            <span>{status.success ? 'Dziękujemy!' : 'Wystąpił problem'}</span>
          </h3>
          <p className={styles.paragraph}>
            {status.success
              ? 'Twoja wiadomość właśnie wpadła do naszej skrzynki. Odpowiemy na nią najszybciej jak to możliwe.'
              : 'Napotkaliśmy drobne problemy podczas przesyłania formularza. Spróbuj przesłać go ponownie.'}
          </p>
          {!status.success && (
            <>
              <Button
                type='button'
                onClick={() => setStatus({ sending: false, success: undefined })}
              >
                Wyślij wiadomość ponownie
              </Button>
            </>
          )}
        </div>
      )}
    </form>
  );
};

export default Form;
