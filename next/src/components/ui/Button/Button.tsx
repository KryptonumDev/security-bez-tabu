import Link from 'next/link';
import Loader from '../Loader';
import styles from './Button.module.scss';
import type { Props } from './Button.types';
import isExternalLink from '@/utils/is-external-link';

const Button = ({ data, children, href, className, loading, type, disabled, onClick, ...props }: Props) => {
  if (data) {
    href = data.href;
    children = data.text;
  }
  const commonProps = {
    className: `${styles['Button']} cta ${className ? className : ''}`,
    type: type ? type : 'button',
    disabled: disabled,
    onClick: onClick,
    ...props,
  };
  const isExternal = isExternalLink(href);
  const Item: React.ElementType = href ? (isExternal ? 'a' : Link) : 'button';
  return (
    <Item
      {...(href && {
        href,
        ...(isExternal && { target: '_blank', rel: 'noopener' }),
      })}
      {...commonProps}
    >
      {loading && <Loader />}
      <span dangerouslySetInnerHTML={{ __html: children ?? '' }} />
      <div className={styles.border} />
      <Corner className={styles.corner} />
    </Item>
  );
};

export default Button;

const Corner = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    width='18'
    height='18'
    viewBox='1.41 1.34 19.7 19.25'
    stroke='#1DA4FD'
    strokeWidth='1'
    {...props}
  >
    <path d='M20.52 1.927L2 20h18.52V1.927z'></path>
  </svg>
);
