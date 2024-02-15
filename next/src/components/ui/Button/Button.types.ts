import { type Cta } from "@/global/types"

export type Props = {
  data?: Cta;
  children?: string;
  href?: string;
  className?: string;
  loading?: boolean;
  type?: string;
  disabled?: boolean;
  onClick?: () => void;
}