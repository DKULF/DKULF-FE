import { ComponentPropsWithRef, forwardRef } from 'react';

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  size: 'large' | 'small';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size, className, children, ...attributes }, ref) => {
    const baseStyles =
      'rounded-lg text-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

    const sizeStyles =
      size === 'large'
        ? 'w-full bg-blue-500 text-white p-4 hover:bg-blue-600'
        : 'py-3 px-2 bg-gray-200 max-w-[62px] w-full text-gray-700 hover:bg-gray-300';

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${sizeStyles} ${className || ''}`}
        {...attributes}
      >
        {children}
      </button>
    );
  },
);
