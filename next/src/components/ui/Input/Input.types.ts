import type { FieldErrors, FieldValues, UseFormRegisterReturn } from 'react-hook-form';

export type InputTypes = {
  register: UseFormRegisterReturn<string>;
  errors: FieldErrors<FieldValues>;
  label: string;
  textarea?: boolean;
  type?: string;
};

export type TextareaType = {
  name?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
