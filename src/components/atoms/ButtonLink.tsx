import React, { ReactElement, JSXElementConstructor, FC } from 'react';
import classNames from '@lib/classNames';
import Link from 'next/link';

export type props = {
  className?: string;
  href: string;
  color?: 'primary' | 'primary-dark' | 'neutral' | 'danger';
  weight?: 'solid' | 'outline' | 'ghost';
  shape?: 'pill' | 'semibrick' | 'brick';
  size?: 'small' | 'medium' | 'large' | 'relative';
  align?: 'left' | 'center' | 'right';
  label?: string;
  icon?: ReactElement<SVGElement, string | JSXElementConstructor<any>>;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
};

const ButtonLink: FC<props> = ({
  className,
  color,
  weight,
  shape,
  size,
  label,
  icon,
  iconPosition,
  align,
  fullWidth,
  href,
  ...props
}) => {
  const colorStyle = classNames(
    color == 'primary'
      ? classNames(
          weight == 'solid'
            ? 'btn-primary'
            : weight == 'outline'
            ? 'btn-primary-outline'
            : 'btn-primary-ghost'
        )
      : color == 'primary-dark'
      ? classNames(
          weight == 'solid'
            ? 'btn-primary-dark'
            : weight == 'outline'
            ? 'btn-primary-dark-outline'
            : 'btn-primary-dark-ghost'
        )
      : color == 'neutral'
      ? classNames(
          weight == 'solid'
            ? 'btn-neutral'
            : weight == 'outline'
            ? 'btn-neutral-outline'
            : 'btn-neutral-ghost'
        )
      : color == 'danger' &&
        classNames(
          weight == 'solid' ? 'btn-danger' : weight == 'outline' ? 'btn-danger-outline' : 'btn-danger-ghost'
        )
  );
  const sizeStyle = classNames(
    size == 'small' ? 'text-xs' : size == 'medium' ? 'text-sm' : size == 'large' && 'text-sm sm:text-base'
  );

  const shapeStyle = classNames(shape == 'pill' ? 'rounded-full' : shape == 'semibrick' && 'rounded-md');
  const alignStyle = classNames(
    align == 'right'
      ? 'justfy-start text-right'
      : align == 'center'
      ? 'justify-center text-center'
      : 'justify-end text-left'
  );

  const style = classNames(
    className,
    'flex items-center font-semibold space-x-2 transition duration-300 w-max',
    colorStyle,
    sizeStyle,
    shapeStyle,
    alignStyle,
    fullWidth ? 'w-full' : 'min-w-fit',
    !label && icon ? 'p-3' : 'py-3 px-5'
  );

  return (
    <Link href={href} {...props}>
      <a className={style}>
        {icon && iconPosition == 'left' && <div>{icon}</div>}
        {label && <p>{label}</p>}
        {icon && iconPosition == 'right' && <div>{icon}</div>}
      </a>
    </Link>
  );
};

ButtonLink.defaultProps = {
  color: 'primary',
  shape: 'pill',
  weight: 'solid',
  size: 'medium',
  align: 'center',
  iconPosition: 'left',
  fullWidth: false,
};
export default ButtonLink;
