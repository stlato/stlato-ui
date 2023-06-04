'use client';

import { forwardRef } from 'react';
import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

const button = tv({
  base: 'inline-flex items-center justify-center rounded-md typography-button',
  variants: {
    color: {
      primary: 'text-primary-contraText bg-primary-500 hover:bg-primary-600',
      secondary: 'text-secondary-contraText bg-secondary-500 hover:bg-secondary-600',
    },
    size: {
      sm: 'text-sm px-4 py-1.5',
      md: 'text-base px-5 py-2',
      lg: 'text-lg px-6 py-2.5',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});

const icon = tv({
  base: 'mr-2',
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-xs',
      lg: 'text-sm',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export type ButtonProps = VariantProps<typeof button> & {
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
} & React.ComponentPropsWithoutRef<'button'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, className, size, color, startIcon, endIcon, ...rest } = props;

  return (
    <button className={button({ className, size, color })} {...rest} ref={ref}>
      {startIcon && <span className={icon({ size })}>{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
});
