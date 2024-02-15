export type Props = {
  heading: string;
  cta: {
    theme: string;
    href: string;
    text: string;
  };
  additionalInfo: string;
  isCountdown: boolean;
}