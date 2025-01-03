import { AlertMessage } from '@/components/atoms/AlertMessage';
import { Button } from '@/components/atoms/Button';
import { forwardRef, ComponentPropsWithRef } from 'react';

interface InputProps extends ComponentPropsWithRef<'input'> {
  label?: string;
  isError?: boolean;
  alertMessage?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label = '',
      isError = false,
      alertMessage,
      buttonText,
      onButtonClick,
      className = '',
      ...attributes
    },
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
              className={`w-full p-3 border rounded-lg focus:outline-none placeholder:text-sm ${className}`}
              {...attributes}
            />
            {buttonText && (
              <Button size="small" onClick={onButtonClick}>
                {buttonText}
              </Button>
            )}
          </div>
          {alertMessage && (
            <AlertMessage isError={isError}>{alertMessage}</AlertMessage>
          )}
        </div>
      </div>
    );
  },
);
