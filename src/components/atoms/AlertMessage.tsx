import { ComponentPropsWithoutRef } from 'react';

interface AlertMessageProps extends ComponentPropsWithoutRef<'span'> {
  isError?: boolean;
}

export const AlertMessage = ({
  isError = false,
  children,
  ...attributes
}: AlertMessageProps) => {
  return (
    <p
      className={`mt-2 text-sm ${isError ? 'text-red-600' : 'text-green-600'}`}
      {...attributes}
    >
      {children}
    </p>
  );
};
