import type { FieldErrors, FieldValues, UseFormRegisterReturn } from "react-hook-form";

export type Props = {
  register: UseFormRegisterReturn<string>;
  errors: FieldErrors<FieldValues>;
  label: string;
  textarea?: boolean;
  type?: string;
}