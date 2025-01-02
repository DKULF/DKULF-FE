import { AlertMessage } from '@/components/atoms/AlertMessage';
import { forwardRef, ComponentPropsWithRef } from 'react';

interface InputProps extends ComponentPropsWithRef<'input'> {
  label?: string;
  isError?: boolean;
  alertMessage?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label = '', isError = false, alertMessage, ...attributes }, ref) => {
    return (
      <div>
        {label && (
          <label className="block text-sm font-medium mb-2">{label}</label>
        )}
        <div>
          <input
            ref={ref}
            className="w-full p-3 border rounded-lg focus:outline-none "
            {...attributes}
          />
          {alertMessage && (
            <AlertMessage isError={isError}>{alertMessage}</AlertMessage>
          )}
        </div>
      </div>
    );
  },
);
