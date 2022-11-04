import React, { FC } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import classNames from '@lib/classNames';

export type props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
  UseFormRegisterReturn & {
    className?: string;
    type?: 'text' | 'email' | 'password';
    color?: 'primary';
    label?: string;
    error?: string;
    fullWidth?: boolean;
  };
const TextField = React.forwardRef<any, props>(
  ({ className, color, label, error, type, fullWidth, ...props }, ref) => {
    return (
      <div className={classNames(fullWidth && 'w-full', className)}>
        {label && <label>{label}</label>}
        <input
          type={type}
          className={classNames('textfield-primary', label && 'mt-3', fullWidth && 'w-full')}
          ref={ref}
          {...props}
        />
        {error && <p className="mt-1 ml-1 text-xs text-red-500 ">{error}</p>}
      </div>
    );
  }
);

TextField.defaultProps = {
  color: 'primary',
  type: 'text',
  fullWidth: true,
};

export default TextField;
