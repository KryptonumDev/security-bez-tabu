'use client';
import { useState } from 'react';
import Link from 'next/link';
import { type FieldValues, useForm } from 'react-hook-form';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Checkbox from '@/components/ui/Checkbox';
import { REGEX } from '@/global/constants';
import Loading from '@/components/ui/Loading';
import State from './State';
import type { FormStatusTypes } from '@/global/types';
import type { FormTypes } from '../Faq.types';

const Form = ({ StatusIcon }: FormTypes) => {
  const [status, setStatus] = useState<FormStatusTypes>({ sending: false, success: undefined });
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
          required: { value: true, message: 'E-mail jest wymagany' },
          pattern: { value: REGEX.email, message: 'Niepoprawny adres e-mail' },
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
          required: { value: true, message: 'Zgoda jest wymagana' },
        })}
        errors={errors}
      />
      <Button
        type='submit'
        disabled={status?.sending}
      >
        Wyślij wiadomość
      </Button>
      <Loading sending={status?.sending} />
      <State
        isSuccess={status?.success}
        setStatus={setStatus}
        StatusIcon={StatusIcon}
      />
    </form>
  );
};

export default Form;
