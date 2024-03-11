import type { FieldErrors, FieldValues, UseFormRegisterReturn } from 'react-hook-form';

export type RadioTypes = {
  register: UseFormRegisterReturn<string>;
  errors: FieldErrors<FieldValues>;
  label: string;
};
