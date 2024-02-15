import type { FieldErrors, FieldValues, UseFormRegisterReturn } from 'react-hook-form';

export type Props = {
  register: UseFormRegisterReturn<string>;
  label: React.JSX.Element;
  errors: FieldErrors<FieldValues>;
};
