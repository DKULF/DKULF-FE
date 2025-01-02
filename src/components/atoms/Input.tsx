import { AlertMessage } from '@/components/atoms/AlertMessage';
import { Button } from '@/components/atoms/Button';
import { forwardRef, ComponentPropsWithRef } from 'react';

interface InputProps extends ComponentPropsWithRef<'input'> {
  label?: string;
  isError?: boolean;
  alertMessage?: string;
  buttonText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label = '', isError = false, alertMessage, buttonText, ...attributes },
    ref,
  ) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium mb-2">{label}</label>
        )}
        <div>
          <div className="flex space-x-2 items-center">
            <input
              ref={ref}
              className="w-full p-3 border rounded-lg focus:outline-none "
              {...attributes}
            />
            {buttonText && <Button size="small">{buttonText}</Button>}
          </div>
          {alertMessage && (
            <AlertMessage isError={isError}>{alertMessage}</AlertMessage>
          )}
        </div>
      </div>
    );
  },
);
