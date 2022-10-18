import * as React from 'react';

interface FormData {
  [key: string]: {
    value: string;
    isValid: boolean;
  };
}

export interface FormConfig {
  validation: {
    required: boolean;
    rules: {
      [key: string]: (value: string) => boolean;
    };
  };
}

export const useForm = ({ validation }: FormConfig) => {
  const [data, setData] = React.useState<FormData>({});
  const [isTouched, setIsTouched] = React.useState(false);
  const hasErrors = Object.keys(data).some(
    (inputName) => !data[inputName].isValid
  );

  const register = (inputName: string) => {
    return {
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = event.target.value;
        const inputValidator = validation.rules[inputName];

        if (!isTouched) {
          setIsTouched(true);
        }

        setData((prevData) => ({
          ...prevData,
          [inputName]: {
            value,
            isValid: inputValidator
              ? inputValidator(value)
              : validation.required,
          },
        }));
      },
    };
  };

  const handleSubmit = (callback: (data?: FormData) => Promise<void>) => {
    return (event: React.SyntheticEvent) => {
      event.preventDefault();
      callback(data);
    };
  };

  return {
    register,
    handleSubmit,
    isValid: !hasErrors,
    isTouched,
  };
};
